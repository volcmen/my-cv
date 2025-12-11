#!/usr/bin/env bun

import puppeteer from 'puppeteer';

// Bun provides import.meta.dir for the current directory
// We use simple string concatenation to avoid 'path' module
const PROJECT_ROOT = `${import.meta.dir}/..`;
const DIST_DIR = `${PROJECT_ROOT}/dist`;
const OUTPUT_FILE = `${PROJECT_ROOT}/cv.pdf`;

async function generatePDF(): Promise<void> {
  // Check if dist/index.html exists as a proxy for successful build/dist existence
  const indexFile = Bun.file(`${DIST_DIR}/index.html`);
  if (!(await indexFile.exists())) {
    console.error(`Error: ${DIST_DIR}/index.html not found, check the build`);
    process.exit(1);
  }

  console.log('Starting local server...');
  const server = Bun.serve({
    port: 0, // Random available port
    fetch(req) {
      const url = new URL(req.url);
      let filePath = DIST_DIR + url.pathname;

      // Serve index.html for root or if ends with slash
      if (url.pathname === '/' || url.pathname.endsWith('/')) {
        filePath = filePath.endsWith('/') ? `${filePath}index.html` : `${filePath}/index.html`;
      }

      const file = Bun.file(filePath);
      return new Response(file);
    },
    error() {
      return new Response('Not Found', { status: 404 });
    },
  });

  const serverUrl = `http://localhost:${server.port}`;
  console.log(`Server running at ${serverUrl}`);

  console.log('Launching browser...');
  const browser = await puppeteer.launch({
    headless: true,
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--disable-dev-shm-usage',
    ],
  });

  try {
    const page = await browser.newPage();

    // Set viewport to match typical browser window
    await page.setViewport({
      width: 1200,
      height: 2000,
      deviceScaleFactor: 2,
    });

    console.log(`Loading HTML from ${serverUrl}...`);
    await page.goto(serverUrl, {
      waitUntil: 'networkidle0',
      timeout: 30000,
    });

    // CRITICAL: Force screen media type to match browser rendering (not print)
    await page.emulateMediaType('screen');

    // Wait for fonts to be fully loaded
    await page.evaluate(() => {
      return document.fonts.ready;
    });

    // Wait for all styles and layout to settle
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Inject CSS to prevent page breaks
    await page.addStyleTag({
      content: `
        * {
          page-break-inside: avoid !important;
          break-inside: avoid !important;
        }
        body, html {
          overflow: visible !important;
        }
      `,
    });

    // Get the exact rendered dimensions
    const dimensions = await page.evaluate(() => {
      const body = document.body;
      const html = document.documentElement;

      const contentHeight = Math.max(
        body.scrollHeight,
        body.offsetHeight,
        html.scrollHeight,
        html.offsetHeight,
        body.getBoundingClientRect().height,
        html.getBoundingClientRect().height,
      );

      const contentWidth = Math.max(
        body.scrollWidth,
        body.offsetWidth,
        html.scrollWidth,
        html.offsetWidth,
        body.getBoundingClientRect().width,
        html.getBoundingClientRect().width,
      );

      return {
        height: Math.ceil(contentHeight),
        width: Math.ceil(contentWidth),
      };
    });

    console.log(`Content dimensions: ${dimensions.width}x${dimensions.height}px`);

    // Update viewport to exactly match content dimensions
    await page.setViewport({
      width: dimensions.width,
      height: dimensions.height,
      deviceScaleFactor: 2,
    });

    // Wait for reflow after viewport change
    await new Promise(resolve => setTimeout(resolve, 300));

    // Recalculate dimensions one last time
    const finalDimensions = await page.evaluate(() => {
      const body = document.body;
      const html = document.documentElement;

      return {
        height: Math.max(
          body.scrollHeight,
          html.scrollHeight,
          body.getBoundingClientRect().height,
          html.getBoundingClientRect().height,
        ),
        width: Math.max(
          body.scrollWidth,
          html.scrollWidth,
          body.getBoundingClientRect().width,
          html.getBoundingClientRect().width,
        ),
      };
    });

    console.log(`Final dimensions: ${finalDimensions.width}x${finalDimensions.height}px`);
    console.log('Generating PDF...');

    await page.pdf({
      path: OUTPUT_FILE,
      width: `${finalDimensions.width}px`,
      height: `${finalDimensions.height}px`,
      printBackground: true,
      margin: {
        top: '0px',
        right: '0px',
        bottom: '0px',
        left: '0px',
      },
      preferCSSPageSize: false,
      displayHeaderFooter: false,
      scale: 1,
    });

    console.log(`PDF generated successfully: ${OUTPUT_FILE}`);
  }
  catch (error) {
    console.error('Error generating PDF:', error);
    process.exit(1);
  }
  finally {
    await browser.close();
    server.stop();
  }
}

generatePDF().catch((error: unknown) => {
  console.error('Fatal error:', error);
  process.exit(1);
});

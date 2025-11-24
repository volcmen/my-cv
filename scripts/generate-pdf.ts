#!/usr/bin/env bun

import puppeteer from 'puppeteer';
import path from 'path';
import fs from 'fs';

// Bun provides import.meta.dir for the current directory
const __dirname = import.meta.dir;

async function generatePDF(): Promise<void> {
  const htmlFile = path.join(__dirname, '..', 'cv.html');
  const outputFile = path.join(__dirname, '..', 'cv.pdf');

  // Check if HTML file exists
  if (!fs.existsSync(htmlFile)) {
    console.error(`Error: ${htmlFile} not found`);
    process.exit(1);
  }

  console.log('Launching browser...');
  const browser = await puppeteer.launch({
    headless: true,
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--disable-dev-shm-usage'
    ]
  });

  try {
    const page = await browser.newPage();
    
    // Set viewport to match typical browser window
    // Width: 1200px to accommodate max-width: 900px container + padding (20px each side) + margins
    await page.setViewport({
      width: 1200,
      height: 2000, // Initial height, will be adjusted
      deviceScaleFactor: 2 // Higher DPI for crisp rendering
    });

    // Get absolute file path for local resources
    const filePath = `file://${path.resolve(htmlFile)}`;
    
    console.log(`Loading HTML from ${filePath}...`);
    await page.goto(filePath, {
      waitUntil: 'networkidle0',
      timeout: 30000
    });

    // CRITICAL: Force screen media type to match browser rendering (not print)
    // This ensures @media print styles are NOT applied
    await page.emulateMediaType('screen');

    // Wait for fonts to be fully loaded
    await page.evaluate(() => {
      // @ts-ignore - DOM APIs exist in browser context
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
      `
    });

    // Get the exact rendered dimensions - use the actual scroll height
    const dimensions = await page.evaluate(() => {
      // @ts-ignore - DOM APIs exist in browser context
      const body = document.body;
      // @ts-ignore
      const html = document.documentElement;
      
      // Get the actual content height - use scrollHeight for accurate measurement
      const contentHeight = Math.max(
        body.scrollHeight,
        body.offsetHeight,
        html.scrollHeight,
        html.offsetHeight,
        body.getBoundingClientRect().height,
        html.getBoundingClientRect().height
      );
      
      const contentWidth = Math.max(
        body.scrollWidth,
        body.offsetWidth,
        html.scrollWidth,
        html.offsetWidth,
        body.getBoundingClientRect().width,
        html.getBoundingClientRect().width
      );
      
      return {
        height: Math.ceil(contentHeight), // Round up to ensure no clipping
        width: Math.ceil(contentWidth)
      };
    });

    console.log(`Content dimensions: ${dimensions.width}x${dimensions.height}px`);

    // Update viewport to exactly match content dimensions
    await page.setViewport({
      width: dimensions.width,
      height: dimensions.height,
      deviceScaleFactor: 2
    });

    // Wait for reflow after viewport change
    await new Promise(resolve => setTimeout(resolve, 300));

    // Verify dimensions one more time after viewport change
    const finalDimensions = await page.evaluate(() => {
      // @ts-ignore
      const body = document.body;
      // @ts-ignore
      const html = document.documentElement;
      
      return {
        height: Math.max(
          body.scrollHeight,
          html.scrollHeight,
          body.getBoundingClientRect().height,
          html.getBoundingClientRect().height
        ),
        width: Math.max(
          body.scrollWidth,
          html.scrollWidth,
          body.getBoundingClientRect().width,
          html.getBoundingClientRect().width
        )
      };
    });

    console.log(`Final dimensions: ${finalDimensions.width}x${finalDimensions.height}px`);

    console.log('Generating PDF (single page, no breaks)...');

    // Generate PDF with exact dimensions - single page, no breaks
    await page.pdf({
      path: outputFile,
      width: `${finalDimensions.width}px`,
      height: `${finalDimensions.height}px`,
      printBackground: true, // CRITICAL: Renders gradients, backgrounds, shadows
      margin: {
        top: '0px',
        right: '0px',
        bottom: '0px',
        left: '0px'
      },
      preferCSSPageSize: false, // Use our exact dimensions, not CSS page size
      displayHeaderFooter: false,
      scale: 1 // No scaling - exact match
    });

    console.log(`PDF generated successfully: ${outputFile}`);
  } catch (error) {
    console.error('Error generating PDF:', error);
    process.exit(1);
  } finally {
    await browser.close();
  }
}

generatePDF().catch((error: unknown) => {
  console.error('Fatal error:', error);
  process.exit(1);
});


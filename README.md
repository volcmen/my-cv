# My CV

This repository contains my CV in HTML format with automated PDF generation via GitHub Actions.

## Features

- **Automated PDF Generation**: When `cv.html` is updated, GitHub Actions automatically generates a PDF version
- **Artifact Storage**: Generated PDFs are stored as GitHub Actions artifacts (retained for 90 days)
- **Release Integration**: When you create a Git tag, the PDF is automatically attached to the release

## Usage

### Local Development

To generate a PDF locally:

```bash
bun install
bun run generate-pdf
```

The PDF will be generated as `cv.pdf` in the root directory.

### GitHub Actions

The workflow automatically runs when:
- `cv.html` is pushed to the `main` branch
- `cv.html` is changed in a pull request
- Manually triggered via the GitHub Actions UI

### Creating a Release

To create a release with the PDF attached:

```bash
git tag -a v1.0.0 -m "CV Update"
git push origin v1.0.0
```

The GitHub Action will automatically create a release and attach the PDF.

## Requirements

- Bun 1.0+ (for local generation)
- Puppeteer (automatically installed via Bun)

## Files

- `cv.html` - The source HTML file
- `cv.pdf` - Generated PDF (created by GitHub Actions or local script)
- `.github/workflows/cv-pdf.yml` - GitHub Actions workflow
- `scripts/generate-pdf.ts` - PDF generation script (TypeScript)
- `tsconfig.json` - TypeScript configuration


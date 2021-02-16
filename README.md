<h1 align="center">NextJS Sheets Blog</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.0-blue.svg?cacheSeconds=2592000" />
  <a href="https://opensource.org/licenses/MIT" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" />
  </a>
</p>

> This application was developed using NextJS, Tailwind CSS, and Google Sheets. For fun.

## Getting Started

Create a .env.local file with the following variables:

```bash
GOOGLE_SHEETS_CLIENT_EMAIL=
GOOGLE_SHEETS_PRIVATE_KEY=
SPREADSHEET_ID=
```

and fill in their respective values by using Google App Engine and the Google Sheets API.

To start the development server:

```bash
yarn dev
```

## Notes

There are some values hardcoded, particularly my profile image, the blog header title, and the author name. These will probably be changed in the future to be adaptable but for now, they remain as they are.

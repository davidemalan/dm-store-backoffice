# React + TypeScript + Vite

Starting from the minimal template setup using Vite + React + Typescript with HMR and some ESLint rules:
[@vitejs/plugin-react](https://vite.dev/guide/) 

## Expanding the ESLint configuration

Added some common/custom lint rules in order to make it more production like and added prettier for formatting and allows to have consistency and readability throughout the files.
Check:
- `eslint.config.js`
- `.prettierrc`

## Add CSS preprocessor

Added Sass in order to write generic css as scss (more comfortable).

## Getting Started

First, install the dependencies:
```bash
yarn install
```

Then run the development server:

```bash
yarn dev
```

Open [http://localhost:5173/](http://localhost:5173/) with your browser to see the result.

## Build for production
If you want, you can double-check the final production output using:

First, build the packages for production:
```bash
yarn build
```

Then run the production preview:

```bash
yarn preview
```

Open [http://localhost:4173/](http://localhost:4173/) with your browser to see the result.

<!-- TODO ## Env Variables -->

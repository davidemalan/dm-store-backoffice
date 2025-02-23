# React + TypeScript + Vite

Starting from the minimal template setup using Vite + React + Typescript with HMR and some ESLint rules:
[@vitejs/plugin-react](https://vite.dev/guide/) 

## Main Features

### Expanding the ESLint configuration

Added some common/custom lint rules in order to make it more production like and added prettier for formatting and allows to have consistency and readability throughout the files.
Check:
- `eslint.config.js`
- `.prettierrc`


### Zustand

Added Zustand to handle application state.

### React Router

Added React Router to handle route changes.

### Axios

Added Axios for fetch functions and useAxios hook to avoid repetitions on handling errors and data handling, with usePagination hook for Pagination.

### Styled Components

Added Styled Componentsfor styling and modularity, also used Styled Breakpoints to handle media queries.

### Chart.js

Added Chart.js for the chart design and used react-chartjs-2 as it provides an easy integration for the library.

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

Note: check .env file in order to change api endpoint, store id or pagination behaviour.

## Build for production

If wanted, the final production output can be double-check by doing the following:

```bash
yarn build
```

Then run the production preview:

```bash
yarn preview
```

Open [http://localhost:4173/](http://localhost:4173/) with your browser to see the result.

## Deployed version

To check the latest deployed version of the project, visit: 
[https://davidemalan.github.io/dm-store-backoffice/](https://davidemalan.github.io/dm-store-backoffice/)
<!-- TODO ## Env Variables -->

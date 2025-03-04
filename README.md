## Usage

Those templates dependencies are maintained via [pnpm](https://pnpm.io) via `pnpm up -Lri`.

This is the reason you see a `pnpm-lock.yaml`. That being said, any package manager will work. This file can be safely be removed once you clone a template.

## Available Scripts

In the project directory, you can run:

### `pnpm install`

Is used to install all dependencies for a project.

```
pnpm up --latest
```

Updates all dependencies to their latest versions

### `pnpm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>

### `pnpm run build`

Builds the app for production to the `dist` folder.<br>
It correctly bundles Solid in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

### Learn more about shortcuts

- C - color.
- S - size.
- P - pseudo.

## Deployment

You can deploy the `dist` folder to any static host provider (netlify, surge, now, etc.)

## Tools

- [Sticky Table of Contents with Scrolling Active States](https://css-tricks.com/sticky-table-of-contents-with-scrolling-active-states/)
- [CSS Color Guide Convertor](https://colorjs.io/apps/convert/?color=lime&precision=4)
- [Browse UX apps](https://mobbin.com/browse/ios/apps?sort=publishedAt)
- [Storybook Colors](https://workday.github.io/canvas-tokens/?path=/docs/docs-base-tokens--docs)

### Backend Api

[Waffle](https://github.com/Manviel/Waffle) uses mongo database atlas

### Required Extensions

- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode).
- [Eslint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint).

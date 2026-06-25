# Usage

Those templates dependencies are maintained via [pnpm](https://pnpm.io) via `pnpm up -Lri`.

This is the reason you see a `pnpm-lock.yaml`. That being said, any package manager will work. This file can be safely be removed once you clone a template.

## Available Scripts

| Task                 | Bun Command     | Old npm Equivalent |
| -------------------- | --------------- | ------------------ |
| Install dependencies | `bun install`   | `pnpm install`     |
| Run dev server       | `bun run dev`   | `pnpm run dev`     |
| Build for production | `bun run build` | `pnpm run build`   |
| Lint code            | `bun run lint`  | `pnpm run lint`    |

### `bun run start`

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.

### `bun run build`

Builds the app for production to the `dist` folder.
It correctly bundles Solid in production mode and optimizes the build for the best performance.

### `bunx npm-check-updates -u && bun install`

Update all outdated packages to their latest versions.

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

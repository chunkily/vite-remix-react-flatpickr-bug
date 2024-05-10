# react-flatpickr bug demo

This repo is meant to reproduce a bug where react-flatpickr does not work in a
Remix application using vite.

1. Install dependencies with `npm ci`
2. Run the project with `npm run dev`

## Steps to reproduce

1. Create a new vite powered Remix application using `npx create-remix@2.9.1`
2. Install `react-flatpickr` and use the component in a new route.
3. Observe that an error is thrown when the component is rendered with
   server-side rendering but is fine with client-side rendering.

## Workarounds

The bug can be worked around by using
[vite-plugin-cjs-interop](https://github.com/cyco130/vite-plugin-cjs-interop);

```ts
// vite.config.ts
import { vitePlugin as remix } from "@remix-run/dev";
import { installGlobals } from "@remix-run/node";
import { defineConfig } from "vite";
import { cjsInterop } from "vite-plugin-cjs-interop";
import tsconfigPaths from "vite-tsconfig-paths";

installGlobals();

export default defineConfig({
  plugins: [
    cjsInterop({
      dependencies: ["react-flatpickr"],
    }),
    remix(),
    tsconfigPaths(),
  ],
});
```

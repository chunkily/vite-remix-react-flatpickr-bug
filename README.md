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

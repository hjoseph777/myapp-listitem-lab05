This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Deploy on GitHub Pages

To deploy your Next.js app to GitHub Pages, follow these steps:

1. Ensure your `package.json` has the correct `homepage` field and `predeploy` and `deploy` scripts.
2. Run the following command to build and deploy your app:

```bash
npm run build && npm run deploy
```

# Deploying a React App to GitHub Pages using `gh-pages`

This guide will walk you through the steps to deploy your React app to GitHub Pages using the `gh-pages` package.

## Prerequisites

- Ensure you have Node.js and npm installed.
- Create a GitHub repository for your project.

## Steps

### 1. Install `gh-pages`

First, install the `gh-pages` package as a dev dependency:

```bash
npm install gh-pages --save-dev
```

### 2. Update `package.json`

Add the `homepage` field and the `predeploy` and `deploy` scripts to your `package.json`:

```json
{
  // ...existing code...
  "homepage": "https://<your-github-username>.github.io/<your-repo-name>",
  "scripts": {
    // ...existing code...
    "predeploy": "npm run build",
    "deploy": "gh-pages -d out"
  },
  // ...existing code...
}
```

Replace `<your-github-username>` and `<your-repo-name>` with your GitHub username and repository name, respectively.

### 3. Configure `next.config.ts`

Ensure your `next.config.ts` is configured correctly for GitHub Pages:

```typescript
// filepath: /c:/Users/Owner/myapp-listitem-lab05/next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/myapp-listitem-lab05',
  assetPrefix: '/myapp-listitem-lab05/',
  // ...other config options here...
};

export default nextConfig;
```

### 4. Add Remote Repository

If you haven't already, add the remote repository:

```bash
git remote add origin https://github.com/<your-github-username>/<your-repo-name>.git
```

### 5. Build and Deploy

Run the following command to build and deploy your app:

```bash
npm run build && npm run deploy
```

### 6. Verify Deployment

Visit `https://<your-github-username>.github.io/<your-repo-name>` to see your deployed app.

## Conclusion

You have successfully deployed your React app to GitHub Pages using `gh-pages`. For more information, refer to the [gh-pages documentation](https://www.npmjs.com/package/gh-pages).

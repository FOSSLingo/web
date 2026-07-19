# FOSSLingo web client

This is a NextJS app made with `create-next-app`. It is made as the main client for FOSSLingo.

## Development;

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

Open [`http://localhost:3000`](http://localhost:3000) with your browser to see the result.

## Hosting;
Since this is a Next app, the best way to host would probably be on Vercel:

> [!IMPORTANT]  
> Deploy the backend first or else deployment will fail.
> Instructions for deploying the backend can be found at
> FOSSLingo/backend

1. Create a Vercel account at `vercel.com`, and link your GitHub account
2. On Github, create a fork of `FOSSLingo/web`
3. Back on Vercel, Click on "Import Project"
4. Select Import next to "web"
5. Under Application Preset, select Next.js
6. Click "Environment Variables", and add one named `NEXT_PUBLIC_BACKEND_URL` with the value of your backend URL.
5. Click Deploy, and Deployment should start with the latest Git Commit
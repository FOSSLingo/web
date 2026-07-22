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

## Hosting on Vercel;
> [!IMPORTANT]  
> If you haven't deployed the backend,
> it is a good time to do that now.
> Follow the instructions [here](https://github.com/FOSSLingo/backend/blob/main/README.md#hosting-on-vercel)

Since this is a Next app, the best way to host would probably be on Vercel. Click this button to deploy instantly!

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FFOSSLingo%2Fweb&env=NEXT_PUBLIC_BACKEND_URL&envDescription=Backend%20URL&envLink=https%3A%2F%2Fgithub.com%2FFOSSLingo%2Fbackend%2Fblob%2Fmain%2FREADME.md%23hosting-on-vercel&project-name=fosslingo-web&repository-name=fosslingo-web)

Or, follow these instructions manually.

1. Create a Vercel account at `vercel.com`, and link your GitHub account
2. On Github, create a fork of `FOSSLingo/web`
3. Back on Vercel, Click on "Import Project"
4. Select Import next to "web"
5. Under Application Preset, select Next.js
6. Click "Environment Variables", and add one named `NEXT_PUBLIC_BACKEND_URL` with the value of your backend URL.
5. Click Deploy, and Deployment should start with the latest Git Commit
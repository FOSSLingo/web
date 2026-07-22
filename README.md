# FOSSLingo web client

## What is FOSSLingo?
FOSSLingo is an alternative to traditional language learning apps, designed to be free and open-source. I (iddu01) believe that education should be free for all, espically language learning. I originally made this as a project for Hackclub's Horizons.

## Screenshots;

<img src="/screenshots/lessons-page.png" width="436" height="294" alt="Lessons Page">
<img src="/screenshots/multiplechoice.png" width="436" height="294" alt="Multiple Choice Page">
<img src="/screenshots/multiplechoice-correctanswer.png" width="436" height="294" alt="Multiple Choice Page with Correct Answer">
<img src="/screenshots/fillintheblanks.png" width="436" height="294" alt="Fill Tn The Blanks Page">
<img src="/screenshots/fillintheblanks-correctanswer.png" width="436" height="294" alt="Fill In The Blanks page with Correct Answer">

## How to use;

Currently, you can visit [this link](https://web-eight-ivory-84.vercel.app/) to demo FOSSLingo. Courses havent been added due to Horizon's due date, so this is currently a tech demo.

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

### Hosting on Vercel;
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
6. Click "Environment Variables", and add one named `NEXT_PUBLIC_BACKEND_URL` with the value of your [backend](https://github.com/FOSSLingo/backend) URL.
5. Click Deploy, and Deployment should start with the latest Git Commit

### Self hosting deploy

If you would like to self host the frontend on your own machine, follow these instructions. 

> [!TIP]
> We don't cover port forwarding / exposing to the web,
> but for that, we recommend `cloudflared`!

This guide assumes you have `npm` and `git` installed on a Linux system.

1. Clone this repo somewhere easy to access:

```bash
git clone https://github.com/FOSSLingo/web
```

2. cd into the cloned directory:

```bash
cd web
```

3. Start the production server:

```bash
npm run build && npm start
```
---
This is a NextJS app made with `create-next-app`. It is made as the main client for FOSSLingo.
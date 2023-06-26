This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

After cloning locally you can navigate to the project directory and run the following:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Currently this page you will be able to see a list of cards that contain the information of houses that are returned from https://anapioficeandfire.com/api/houses here you will be able to see (AT the moment a Generic Coat of arms) with the name of the house, once you click on that you can see the SwornMembers sworned to the selected house (Also generic knight picture), in there you will be able to see if the a sworn member is currently alive or dead, if dead it will show you the information provided on their death, if you would like to learn more about the character you can click on the card and a Modal will show up if you want to learn more about him or her

## CHANGE LOG
***
* [06/22] Update columns to make sure all swornmembers are correctly shown, deleted unneccessary /house page and updated a button to navigate back home on Sworn Members Details page
 
* [06/26] feature/updates branch created, made some modifications to how the list of items is being rendered, and added a navbar along with react query provider so that it is available for use through out the project. 

## Deploy on Vercel

## Learn More

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

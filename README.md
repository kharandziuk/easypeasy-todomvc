# [Inventory App Frontend](https://inventory.hb.architrave.cloud/)

This repository has the frontend code for the inventory app.

## How to run the app?

In the project directory, you can install all dependencies and start the application, please follow the next steps:

### Set environment variables

Execute the next command: `cp .env.example .env`

It's going to create a new `.env` file, using as template the file `env.example`.

Now you can update the required environment variables in this file.

### Install dependencies

Follow the next steps to install the required dependencies:

1. Install [Node Version Manager](https://github.com/nvm-sh/nvm): `brew install nvm`
2. Get inside the `frontend` directory: `cd frontend`
3. Install node version using nvm: `nvm install`
4. Install dependencies following the next section

### `npm install` | `yarn install`

Install all dependencies from `package.json` file.

### `npm start` | `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test` | `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

## Deployment

### `npm build` | `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

Deployment happens automatically with Github Actions to the S3 bucket and be publicly accessed here https://inventory.hb.architrave.cloud/

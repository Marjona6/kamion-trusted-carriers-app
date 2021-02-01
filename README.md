# Kamion Trusted Carriers App

View the live version [here](https://kamion-trusted-carriers-app.vercel.app/).

This project was bootstrapped with
[Create React App](https://github.com/facebook/create-react-app), using the
[Redux](https://redux.js.org/) and
[Redux Toolkit](https://redux-toolkit.js.org/) template.

## Project Purpose

This is an engineering assessment test for a position at
[Kamion](https://www.kamion.co).

### Project Functionalities

Users can register, log in, view a list of their trusted carriers, add a trusted
carrier, update a carrier's name or email, and log out.

Users can also search for carriers by name using a search bar.

The app is responsive for easy viewing on both large and small screens.

### Technologies Used

- React
- Redux
- Redux Sagas
- Styled Components
- Next.js

## Available Scripts

In the project directory, you can run:

### `npm run start`

Runs the app in the development mode.<br /> Open
[http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm run test`

Launches the test runner in the interactive watch mode.<br />

### `npm run build`

Builds the app for production using Next.js.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

Standard eject script from Create-React-App.

### `npm run dev`

Starts the app in development mode, courtesy of Next.js.

### `npm run lint`

Uses ESLint to lint the JavaScript files in the project.

### `npm run prettier`

Uses Prettier to check the files.

### `npm run format`

Formats files according to the predefined style rules with Prettier. Change file
rules in the `.prettierrc` if you're so inclined.

### `npm run validate`

Formats files with Prettier and runs linting on them to check for errors. This
is a good one to run before deploying to production.

### `npm run predeploy`

Builds the project before deploying to Github Pages.

### `npm run deploy`

Theoretically, deploys the project to Github Pages.

In reality, it's much easier and more practical to deploy Next.js projects on
[https://vercel.com](Vercel).

## TODO

- mask phone & email in API call when registering a new user (essential)
- add tests (essential)
- better error handling throughout (essential)
- use the set cookie to persist user login on page refresh (very good to have)
- add validation to phone & email input fields (very good to have)
- show the login form after user registers successfully (very good to have)
- fix hot reloading issue (good to have)
- add a spinner to login page
  (https://www.npmjs.com/package/react-loader-spinner)? (nice to have)
- improve styling, colors, appearance (nice to have)
- enable searching across all pages (nice to have)

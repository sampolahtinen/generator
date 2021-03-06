## How to run locally

1. Clone this repository
2. Create `.env` file at the root of the project.
3. Add `REACT_APP_API_URL=https://api.github.com` to your `.env`
4. [OPTIONAL] Create a `Personal access token` on Github: https://github.com/settings/apps
5. [OPTIONAL] Add `REACT_APP_REACT_APP_GITHUB_TOKEN = [YOUR_TOKEN]` to your `.env`
6. Install dependencies with `yarn install`
7. Run the project `yarn start`

Personal access token is needed in order to see repository permissions on a request response.

## Available scripts

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

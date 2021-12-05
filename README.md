# SNXS Frontend

SQL, NoSQL injection and XXS Scanner.

This application uses the backend Django REST API found at https://github.com/marcopza/SNXS-backend

## Required Tools

- Node.js: https://nodejs.org/en/

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

## Important security reccomendations
Whether you run this backend in your own PC or at a virtual machine, make sure to:
- Create an specific user which executes the application, and ensure they do not have superuser privileges. While the application uses shlex and popen to mitigate shell injections, a step further is making it imposible to indirectly ruin your computer.
- Never pentest against a domain/web application which isn't yours without having written permission. Testing and attempting to use SNXS agaisnt a domain without the owner's permission could warrant legal action agaisnt yourself for which we are not responsible for. Use the tool wisely.

## Outputs and vulnerability coverage:
Our application is in no shape or form a silver bullet for detecting SQL, NoSQL injections and XSS. There are a few points to have in mind:
- Only MongoDB injections are scanned; NoSQLi reports it does work to a certain degree to JS based databases.
- False positives and false negatives are always a possibility when using the application; make sure to properly test each of the vulnerabilities to make ensure the existance of one. Remember to always have written consent!

## Acknowledgements
- [Charlie Belmer](https://github.com/Charlie-belmer). Creator of nosqli who was nice enough to guide us through the integration of his tool with our own.
- [Miroslav Stampar](https://github.com/stamparm). Creator of Damn Small XSS Scanner and part of the sqlmap project. Guided us through the usage and integration of sqlmap and DSXS.
- [Juan Manuel Madrid](https://www.linkedin.com/in/juanmanuelmadrid/?originalSubdomain=co). Guide and tutor for our graduation project.

## Us
- [Marco Antonio Pérez](https://www.linkedin.com/in/marcopza/)
- [Jose Manuel Ossorio](https://www.linkedin.com/in/jose-ossorio-945848155/)


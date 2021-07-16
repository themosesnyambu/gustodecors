# Gustor Decors

Gusto Decors provides interior design and event planning services.

## Tech Stack Used

- [Node.js](https://nodejs.org/)
- [Angular](https://angular.io/)
- [Html]()
- [CSS]()
- [Webpack](https://webpack.js.org/)

## Getting Started

**Development**

To clone and run this application, you'll need [Git](https://git-scm.com) installed on your computer. From your command line:

```bash
# Clone this repository
$ git clone https://github.com/themosesnyambu/gustodecors
```

Next, you will need to install the required dependencies for the project to be up and running on a development server on your machine. Simply enter the repository and do the following:

```bash
# cd into the repository
$ cd gustodecors

# install the dependencies
$ npm install

# Strat the development sever
$ npm run dev
```
Upon running the last command, a new browser window should be opened at `localhost:4200` on your machine.

**Running Tests**

End to End and Unit tests are set up on this repository with Cypress, Jest and Enzyme and dependencies to enable them work are included in the `package.json` file. To run the tests, you can do the following:

```bash
# Enter the project's directory
$ cd gustodecors/

# To run the available unit tests
$ npm test

# To run tests with coverage reports
$ npm run test:coverage

# To run end to end tests with Cypress
$ npm run e2e:test
```
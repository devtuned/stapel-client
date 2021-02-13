# stapel-client

Web frontend for the Stapel project

This repository contains the Angular frontend code.

## Development environment

### Install packages

You need to have have Node.js with the Node Package Manager (npm) installed to run this.

```shell
npm install
```

### Frontend server for development

Run the server on http://localhost:4200

```shell
npm start
```

### Build

Build the application without hosting it on a local development server.

```shell
# For development
npm run build

# For production
npm run build -- --prod
```

### Run tests

```shell
# Run all tests
npm test

# Run unit tests
npm run test:unit

# Run end-to-end tests
npm run test:e2e
```

Unit tests make use of [Karma](https://karma-runner.github.io).

End-to-end tests make use of [Protractor](http://www.protractortest.org/).

## Angular

[Angular CLI](https://angular.io/cli)

> Project base generated from v11.2.0

### Code scaffolding

Generate a new component in its own folder: `.ts`, `.html`, `.styl`, `.spec.ts`

```shell
ng generate component my-component-name
```

Other supported templates

```shell
ng generate directive|pipe|service|class|guard|interface|enum|module
```

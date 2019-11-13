# Angular Material App Template

[![Build Status](https://travis-ci.com/sartography/app-template-angular-material.svg?branch=master)](https://travis-ci.com/sartography/app-template-angular-material)
[![Coverage](https://sonarcloud.io/api/project_badges/measure?project=sartography_app-template-angular-material&metric=coverage)](https://sonarcloud.io/dashboard?id=sartography_app-template-angular-material)

## Getting started
1. Fork this repository.
2. Rename the repository.
3. Replace `sartography` with your own organization name in the following files:
    - `/LICENSE`
    - `/README.md`
    - `/.sonarcloud.properties`
    - `/.travis.yml`
4. Replace `app-template-angular-material` with your own repository name in all files, including:
    - `/README.md`
    - `/.sonarcloud.properties`
    - `/angular.json`
    - `/karma.conf.js`
    - `/package.json`
    - `/package-lock.json`
    - `/src/index.html`
    - `/src/styles.scss`
    - `/src/app/app.component.ts`
    - `/src/app/app.component.spec.ts`
    - `/src/app/home/home.component.html`
    - `/e2e/src/app.e2e-spec.ts`
5. Change the API URLs in the following files:
    - `/src/environments/environment.prod.ts`
    - `/src/environments/environment.staging.ts`
    - `/src/environments/environment.test.ts`
6. Replace the `sonar.login` SonarCloud authentication token in `/.sonarcloud.properties`

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.15.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

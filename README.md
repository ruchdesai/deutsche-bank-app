# DeutscheBankApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.0.4.

## Steps to install and run the project

1. Run `git clone https://github.com/ruchdesai/deutsche-bank-app.git`
2. Run `cd deutsche-bank-app`
3. Run `npm install` to install necessary dependencies
4. Run `npm run start` to run the project
5. Navigate to `http://localhost:4200/`
6. Run `npm run test` to run test

## Project description

Landing page shows one dropdown to select region, depending on which region you select you will then see another dropdown with countries of that region.
Once you select country from the dropdown, details of that country will be displayed in the table below.

Project has shared components (select-drodpown && table) has one service (countries.service) to get all the countries of the selected region.
we have Country and Countries interface to check the response type.

Also written some unit test with code coverage of 100%.

## NGRX Implementation

I have created a separate branch for NGRX implementation `feature/ngrx`. reason for separate branch is because I haven't had opportunity to work with NGRX commercially yet, but this is something am looking to learn and work on.

I did manage to implement NGRX but with hard coded region `europe`. if given even time to train and look through courses am sure i can easily grasp the knowledge and make it work for you.

I do have theoritical understanding on NGRX as to what it's used for and why we shoukd use it. But practical is still work in progress and won;t be long before I have a complete knowledge of the NGRX library.

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

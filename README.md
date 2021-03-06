# angular-auth0-aside

This repository demonstrates the use of [Auth0](https://auth0.com) with [Angular](https://angular.io) (with the [@angular/cli](https://github.com/angular/angular-cli)) and a sample Node API with a protected route.

## Dependencies

* [Node.js with npm](http://nodejs.org), Node >= 6.9.0, npm >= 3
* [@angular/cli](https://github.com/angular/angular-cli), >= 1.5

## Complete Instructions

For complete instructions on how to set up an Auth0 account, client, and API, as well as how to use this project's Node API and Angular application, please see **[Angular Auth0 Aside](https://github.com/auth0/blog/blob/master/_includes/asides/angular.markdown)**.

## Installation

Clone this project. From the root directory, run the following commands to install dependencies for the server and client-side:

```
$ npm install
$ cd server
$ npm install
```

Open a browser and head to [http://localhost:4200/?clientId=lOWZ0gU498mVSsn40hKLesEJDQbcfQ8A&domain=bk-samples.auth0.com&audience=http://spring-boot-aside.auth0samples.com/&scope=read:contacts](http://localhost:4200/?clientId=lOWZ0gU498mVSsn40hKLesEJDQbcfQ8A&domain=bk-samples.auth0.com&audience=http://spring-boot-aside.auth0samples.com/&scope=read:contacts).

## Serving the project

* Node server: run `node server` from the `/server` folder.
* Angular: run `ng serve` from the root folder.

### Running on Docker

After running the following commands, the app will be available at [`http://localhost:8080`](http://localhost:8080).

```bash
# build the image
docker build -t angular-auth0 .

# run an instance based on this image
docker run --name angular-auth0 -d -p 4200:80 angular-auth0

# or attached to a network and without defining external ports
docker run --name angular-auth0 --network digituz -d angular-auth0
```

## What is Auth0?

Auth0 helps you to:

* Add authentication with [multiple authentication sources](https://docs.auth0.com/identityproviders), either social like **Google, Facebook, Microsoft Account, LinkedIn, GitHub, Twitter, Box, Salesforce, amont others**, or enterprise identity systems like **Windows Azure AD, Google Apps, Active Directory, ADFS or any SAML Identity Provider**.
* Add authentication through more traditional **[username/password databases](https://docs.auth0.com/mysql-connection-tutorial)**.
* Add support for **[linking different user accounts](https://docs.auth0.com/link-accounts)** with the same user.
* Support for generating signed [Json Web Tokens](https://docs.auth0.com/jwt) to call your APIs and **flow the user identity** securely.
* Analytics of how, when and where users are logging in.
* Pull data from other sources and add it to the user profile, through [JavaScript rules](https://docs.auth0.com/rules).

## Create a Free Auth0 Account

1. Go to [Auth0](https://auth0.com) and click Sign Up.
2. Use Google, GitHub, or Microsoft Account to log in.

## Issue Reporting

If you have found a bug or if you have a feature request, please report them at this repository issues section. Please do not report security vulnerabilities on the public GitHub issue tracker. The [Responsible Disclosure Program](https://auth0.com/whitehat) details the procedure for disclosing security issues.

## Author

[Auth0](auth0.com)

## License

This project is licensed under the MIT license. See the [LICENSE](LICENSE) file for more info.

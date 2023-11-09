<a id="readme-top"></a>

<div align="center">
<!-- PROJECT TITLE -->
<h3>Workflow CA - Social Media Client</h3>
<p>Implementation of automated testing and deployment to a social media client</p>

[Link to project][github-repo] - [Link to live site][live-site]

</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#description">Description</a>
        <li><a href="#project-configuration">Project Configuration</a></li>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
        <li><a href="#testing">Testing</a>
          <ul>
            <li><a href="#unit-testing">Unit Testing</a></li>
            <li><a href="#end-to-end-e2e-testing">End-To-End (e2e) Testing</a></li>
          </ul>
        </li>
      </ul>
    </li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#issues">Issues</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

[![Automated E2E Testing](https://github.com/RiverMichael/workflow-CA/actions/workflows/e2e-test.yml/badge.svg)](https://github.com/RiverMichael/workflow-CA/actions/workflows/e2e-test.yml)&nbsp;&nbsp;&nbsp;[![Automated Unit Testing](https://github.com/RiverMichael/workflow-CA/actions/workflows/unit-test.yml/badge.svg)](https://github.com/RiverMichael/workflow-CA/actions/workflows/unit-test.yml)&nbsp;&nbsp;&nbsp;[![Deploy static content to Pages](https://github.com/RiverMichael/workflow-CA/actions/workflows/pages.yml/badge.svg)](https://github.com/RiverMichael/workflow-CA/actions/workflows/pages.yml)&nbsp;&nbsp;&nbsp;[![Code Review](https://github.com/RiverMichael/workflow-CA/actions/workflows/gpt.yml/badge.svg)](https://github.com/RiverMichael/workflow-CA/actions/workflows/gpt.yml)

### Description

This is my project for the course Workflow at [Noroff][noroff-url]. The assignment was to implement effective development workflows and testing strategies to streamline the development process.

The implementation was done to an existing repository containing the Social Media Client, provided from [Noroff][noroff-url].

### Project Configuration

- Configured to run `Prettier` on save.
- Configured to run `ESlint` on git commit.
- Setup to use `Jest` for unit-testing.
- Setup to use `Cypress` for e2e-testing.
- Configured to automatically run unit-testing and e2e-testing on pull requests.
- Project default branch is protected.
- Automated build and deployment through [GitHub pages](https://pages.github.com/) using GitHub actions on merge to default branch.

### Built With

<div style="display: inline-block; text-align: center; ">
<a href="https://developer.mozilla.org/en-US/docs/Web/HTML"><img src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/FrontendDevelopment/html.svg" alt="html" height="30" width="40"></a>&nbsp;&nbsp;&nbsp;
<a href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank"><img src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/FrontendDevelopment/css.svg" alt="css" height="30" width="40"></a>&nbsp;&nbsp;&nbsp;
<a href="https://getbootstrap.com/" target="_blank"><img src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/FrontendDevelopment/bootstrap.svg" alt="bootstrap" height="30" width="40"></a>&nbsp;&nbsp;&nbsp;
<a href="https://https://sass-lang.com/" target="_blank"><img src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/FrontendDevelopment/sass.svg" alt="bootstrap" height="30" width="40"></a>&nbsp;&nbsp;&nbsp;
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank"><img src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/ProgrammingLanguages/javascript.svg" alt="javascript" height="30" width="40"></a>
</div>

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

To get a local copy up and running follow these steps.

<!-- PREREQUISITES -->

### Prerequisites

- [Node.JS](https://nodejs.org/) version 18.17.1 or higher
- [NPM](https://www.npmjs.com/) version 9.6.7 or higher

<!-- INSTALLATION -->

### Installation

1. Open a CLI (Command Line Interface) and go to your desired folder

```sh
cd replace-with-your-desired-folder
```

2. Initialize a local Git repository

```sh
git init
```

3. Clone the repo:

```sh
git clone https://github.com/RiverMichael/workflow-CA.git
```

4. Navigate to the project folder

```sh
cd workflow-CA
```

5. Install NPM packages

```sh
npm i
```

6. To run the application locally (this will run the watch script and start up a live-server)

```sh
npm start
```

<!-- TESTING -->

### Testing

- To run both unit-testing and e2e-testing locally using the CLI

```sh
npm test
```

#### Unit Testing

- To run unit-testing using Jest

```sh
npm run test-unit
```

#### End-To-End (e2e) Testing

- To open Cypress and run e2e-testing interactively

```sh
npm run test-e2e
```

- To run Cypress and e2e-testing locally using the CLI

```sh
npm run test-e2e-cli
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTING -->

## Contributing

If you want to help me make this project better, please fork the repo and create a pull request.

1. Fork the Project
2. Create your Feature Branch

```sh
git checkout -b feature/AmazingFeature
```

3. Commit your Changes

```sh
git commit -m 'Add some AmazingFeature'
```

4. Push to the Branch

```sh
git push origin feature/AmazingFeature
```

5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ISSUES -->

## Issues

Please report any issues [here][github-issues] by following this steps:

1. **Check Existing Issues**: Before creating a new issue, please check the existing issues to avoid duplicates.
2. **Provide Detailed Information**: When reporting an issue, please provide as much information as possible, like the version of the project, steps to reproduce the issue, and any error messages or screenshots.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->

## Contact

Michael "River" Nilsson - [mrn@michaelriver.dev][mrn-mail] - [michaelriver.dev][mrn-url]

[![LinkedIn][linkedin-shield]][linkedin-url]

[Link to project][github-repo] - [Link to live site][live-site]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ACKNOWLEDGMENTS -->

## Acknowledgments

- [Jest](https://jestjs.io/)
- [Cypress](https://www.cypress.io/)
- [GitHub](https://www.github.com/)
- [Noroff][noroff-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->

[github-repo]: https://github.com/RiverMichael/workflow-CA.git
[github-issues]: https://github.com/RiverMichael/workflow-CA/issues
[live-site]: https://RiverMichael.github.io/workflow-CA/
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/michaelrivernilsson
[mrn-url]: https://www.michaelriver.dev
[mrn-mail]: mailto:mrn@michaelriver.dev
[noroff-url]: https://www.noroff.no

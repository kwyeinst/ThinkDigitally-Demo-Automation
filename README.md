![Think Digitally Logo](https://media.licdn.com/dms/image/v2/D4E0BAQHS0ZtTpqvY-Q/company-logo_200_200/company-logo_200_200/0/1708357609019/thinkdigitally_logo?e=2147483647&v=beta&t=LDN_yS29o7zqROBWItAxOSC_czqcAdkFqxzggKUzqS0)

# Think Digitally - Playwright Test Automation

This repository contains the Playwright test automation suite for the [Think Digitally](https://www.thinkdigitally.com/) website.

## Project Structure

The project is structured in a modular way to keep the tests organized and maintainable.

-   `tests/`: This directory contains the test spec files. Each spec file corresponds to a page on the website.
-   `modules/`: This directory contains the test logic for each page. The tests are written as functions and exported. This allows for clean and readable spec files.
-   `playwright.config.ts`: This is the Playwright configuration file.
-   `package.json`: This file contains the project dependencies and scripts.

## Getting Started

### Prerequisites

-   Node.js and npm installed on your machine.

### Installation

1.  Clone the repository:
    ```bash
    git clone <repository-url>
    ```
2.  Navigate to the project directory:
    ```bash
    cd thinkdigitally-demo-automation
    ```
3.  Install the dependencies:
    ```bash
    npm install
    ```

### Running the Tests

To run the tests, use the following command:

```bash
npx playwright test
```

This will run all the tests in the `tests/` directory.

To see the test report, use the following command:

```bash
npx playwright show-report
```

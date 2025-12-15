# df-techtest

Automated UI tests for **https://openferry.com** using **Playwright** (JavaScript) and the **Page Object Model (POM)** pattern.

---

## 📦 Prerequisites

Before running tests locally, ensure you have:

- Node.js (v14+, recommended v18+)
- npm
- Git

Check installed versions:

```bash
node -v
npm -v
git --version
```

## 📁 Project Structure
```.
.
├── pages/                     # Page objects & reusable sections
│   ├── sections/
│   └── locators/
├── tests/                     # Playwright test files
├── playwright.config.js
├── package.json
├── package-lock.json
└── README.md
```

## 📥 Installation

Clone the repository:

```
git clone https://github.com/cfletcher-qa/df-techtest.git
cd df-techtest
```


Install dependencies:

```
npm install
```


Install Playwright browsers:

```
npx playwright install
```


This installs Chromium, Firefox, and WebKit browsers that Playwright uses for test runs.

## ▶️ Running Tests
Run all tests
```
npx playwright test
```
This runs the entire test suite in headless mode.

Run in headed mode (see the browser)
```
npx playwright test --headed
```

Run a single test file
```
npx playwright test tests/landingPage/your-test.spec.js
```

Run specific tests by name
You can filter tests by name:

```
npx playwright test -g "test name"
```

Playwright Test UI
To open the interactive test runner UI:

```
npx playwright test --ui
```

## 🛠 Common Commands
Command	Purpose
| Command                        | Purpose                        |
| ------------------------------ | ------------------------------ |
| `npm install`                  | Install project dependencies   |
| `npx playwright install`       | Install browser binaries       |
| `npx playwright test`          | Run all tests                  |
| `npx playwright test --headed` | Run tests in visible browser   |
| `npx playwright test --ui`     | Open Playwright test runner UI |


## 📌 Notes & Best Practices

Playwright automatically waits for elements before actions — avoid manual sleeps. 
playwright.dev

Keep selectors stable using data-testid or getByRole.

Use test.beforeEach for shared setup steps.

Keep assertions in test files (not page objects).

## ❓ Questions

If you run into issues, check:

Playwright docs: https://playwright.dev/docs/intro

Your Node & npm versions

That browsers are installed (npx playwright install)

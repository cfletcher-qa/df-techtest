# df-techtest

OpenFerry Playwright Tests

UI tests for https://openferry.com using Playwright (JavaScript) and the Page Object Model (POM) pattern.

📦 Prerequisites

Before running tests locally, ensure you have:

✔ Node.js (v14+, recommended v18+)
✔ Git
✔ A terminal / shell environment

Check versions:

node -v
npm -v
git --version

📁 Project Structure
.
├── pages/                     # Page objects & sections
├── tests/                     # Test files
├── helper/                    # Shared setup (cookie, config helpers)
├── .github/workflows/         # CI workflows (if present)
├── package.json
├── package-lock.json
├── playwright.config.js
└── README.md

📥 Installation

Clone the repository:

git clone https://github.com/cfletcher-qa/df-techtest.git
cd df-techtest


Install dependencies:

npm install


Install Playwright browsers:

npx playwright install


This installs Chromium, Firefox, and WebKit browsers that Playwright uses for test runs.

▶️ Running Tests
Run all tests
npx playwright test


This runs the entire test suite in headless mode.

Run in headed mode (see the browser)
npx playwright test --headed

Run a single test file
npx playwright test tests/landingPage/your-test.spec.js

Run specific tests by name

You can filter tests by name:

npx playwright test -g "test name"

Playwright Test UI

To open the interactive test runner UI:

npx playwright test --ui

🧠 What the Tests Do

The tests automate a return journey booking flow on OpenFerry:

Navigate to the homepage

Accept cookie consent

Select return trip

Choose “From” and “To” ports

Select outbound and return dates

Choose time slots

Select passengers

Submit search

Interact with results

📦 Page Object Model (POM)

The tests use a modular structure:

HomePage – high-level actions and navigation

Sections – separated logical concerns:

cookieBanner.section.js – cookie consent handling

ports.section.js – port selection

dateTime.section.js – date/time selection

passengers.section.js – passenger selection

This makes tests readable and maintainable. 
playwright.dev

🛠 Common Commands
Command	Purpose
npm install	Install project dependencies
npx playwright install	Install browser binaries
npx playwright test	Run all tests
npx playwright test --headed	Run tests in visible browser
npx playwright test --ui	Open Playwright test runner UI
📌 Notes & Best Practices

Playwright automatically waits for elements before actions — avoid manual sleeps. 
playwright.dev

Keep selectors stable using data-testid or getByRole.

Use test.beforeEach for shared setup steps.

Keep assertions in test files (not page objects).

🤝 Contributing

Fork the repository

Create a new branch (feature/your-feature)

Add tests or improvements

Submit a pull request

❓ Questions

If you run into issues, check:

Playwright docs: https://playwright.dev/docs/intro

Your Node & npm versions

That browsers are installed (npx playwright install)
skill.md - Playwright Automation Framework

# Playwright Automation Framework Skill

## Purpose
Create and maintain a scalable Playwright test automation framework using TypeScript.

---

# Technology Stack

- Playwright
- Javascript
- Node.js
- Page Object Model (POM)
- Playwright Test Runner

---

# Framework Standards

## Folder Structure

project/
│
├── tests/
├── pages/
├── utils/
├── fixtures/
├── test-data/
├── config/
├── reports/
├── screenshots/
├── playwright.config.js
├── package.json

---

# Framework Setup Steps

## Step 1: Initialize Project

npm init -y

## Step 2: Install Playwright

npm init playwright@latest

## Step 3: Install Dependencies

npm install

---

# Coding Standards

## Use Page Object Model

- Keep locators inside page classes
- Avoid hardcoded waits
- Create reusable methods
- Keep tests clean and readable

Example:

export class LoginPage {
  constructor(private page) {}

  async login(username: string, password: string) {
    await this.page.fill('#username', username);
    await this.page.fill('#password', password);
    await this.page.click('#login');
  }
}

---

# Test Standards

## Naming Convention

- File Name:
  login.spec.js

- Test Name:
  Verify user can login successfully

---

# Best Practices

- Use async/await properly
- Prefer locator strategies over XPath when possible
- Capture screenshots on failure
- Enable trace and video for debugging
- Use environment variables for credentials
- Keep reusable utilities in utils folder

---

# Reporting

## Supported Reports

- HTML Report
- Allure Report

Run report:

npx playwright show-report

---

# Execution Commands

## Run All Tests

npx playwright test

## Run Specific Test

npx playwright test login.spec.js

## Run in Headed Mode

npx playwright test --headed

---

# CI/CD Integration

## Supported Pipelines

- GitHub Actions
- Jenkins
- Azure DevOps

Pipeline should:
1. Install dependencies
2. Run tests
3. Publish reports
4. Archive screenshots and traces

---

# Error Handling

- Use try/catch only when necessary
- Add meaningful assertions
- Log failure reasons clearly

---

# Reusability Guidelines

- Create reusable components
- Store common functions in utils
- Avoid duplicate locators
- Use fixtures for common setup

---

# Framework Features

- Cross-browser testing
- Parallel execution
- API testing support
- Retry mechanism
- Screenshot capture
- Video recording
- Trace viewer support

---

# Expected Outcome

The framework should:
- Be maintainable
- Support scaling
- Reduce code duplication
- Generate clear reports
- Support CI/CD execution
- Follow clean coding practices


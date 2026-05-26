Playwright Login Framework

Prerequisites
- Node.js (>=16)

Quick setup
```bash
npm install --save-dev @playwright/test
npx playwright install
```

Run tests
```bash
npx playwright test
```

Run single test
```bash
npx playwright test tests/login.spec.ts
```

Environment
- Copy `.env.example` to `.env` and set `BASE_URL`, `TEST_USER`, `TEST_PASS`.

Notes about JavaScript
- This framework uses JavaScript (CommonJS). Files: `playwright.config.js`, `tests/*.js`, `pages/*.js`.

Notes
- Reports are written to `playwright-report` by default; view with `npx playwright show-report`.
- CI: install deps, run `npx playwright install`, then `npx playwright test`.

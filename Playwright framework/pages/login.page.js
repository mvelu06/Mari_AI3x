class LoginPage {
  constructor(page) {
    this.page = page;
    this.username = page.locator('input[name="username"]');
    this.password = page.locator('input[name="password"]');
    this.submit = page.locator('button[type="submit"]');
  }

  async goto() {
    await this.page.goto(process.env.BASE_URL ? process.env.BASE_URL : 'https://example.com/login');
  }

  async login(user, pass) {
    await this.username.fill(user);
    await this.password.fill(pass);
    await this.submit.click();
  }
}

module.exports = { LoginPage };

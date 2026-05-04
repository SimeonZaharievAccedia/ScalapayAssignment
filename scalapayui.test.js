const puppeteer = require('puppeteer');
require('dotenv').config({ path: './secrets.env' });

describe('Scalapay UI Automated Test', () => {
  let browser;
  let page;

  beforeAll(async () => {
    browser = await puppeteer.launch({
      headless: true
    });
    page = await browser.newPage();
  });

  afterAll(async () => {
    await browser.close();
  }),

  test('Login correctly into the UI', async () => {
    await page.goto('https://partner.development.scalapay.com/login');

    await page.setViewport({width: 1920, height: 1080});

    await page.type("[id='email']", 'simeon.zahariev@accedia.com');
    await page.type("[id='password']", process.env.UI_PASSWORD);
    await page.click('button[type="submit"]');
    await page.waitForNavigation({ waitUntil: 'networkidle0' });
  }, 15000),

  test('Verify correct locators are present in the account page', async () => {
    await page.waitForSelector('a[href="/account/profile"]');
    await page.waitForSelector('a[href="/instore/dashboard"]');
    await page.waitForSelector('a[href="/logout"]');

    const accountH2 = await page.$eval('[data-automation="PageTitle"]', el => el.textContent.trim());

    if (accountH2 !== 'Account') {
      await page.click('a[href="/account/profile"]');
      throw new Error(`Expected "Account", got "${text}"`);
    }

    await page.waitForSelector('form[data-automation="UserDetailForm_Form"]');
    await page.waitForSelector('input[id="firstName"]');
    await page.waitForSelector('input[id="lastName"]');
    await page.waitForSelector('div[id="language"]');
    await page.waitForSelector('button[data-automation="UserDetailForm_Submit_Button"]');

    await page.screenshot({ path: 'debug.png', fullPage: true });
  });
});
// 引入依赖插件
const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({
    // 安装后的地址
    executablePath: '/Applications/Chromium.app/Contents/MacOS/Chromium',
    args: ['--no-sandbox'],
    dumpio: false
  });
  const page = await browser.newPage();
  await page.goto('https://baidu.com');
  await page.setViewport({
    width: 960,
    height: 540,
});
  await page.screenshot({ path: 'example.png' });
  await browser.close();
})();
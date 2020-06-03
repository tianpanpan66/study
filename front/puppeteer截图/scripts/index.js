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
  await page.goto('http://192.168.1.214:8000/#/slideThumnail?optimize=true', {
    waitUntil: "networkidle0",
    load: true,
    docontentloaded: true,
  });
  await page.setViewport({
    width: 960,
    height: 540,
  });
  
  // 业务代码中设定window中的对象，存在表示加载完成
  await page.waitForFunction('window.coverDataLoaded', {
    polling: 1000
  });
  await page.screenshot({ path: 'example.png' });
  await browser.close();
})();
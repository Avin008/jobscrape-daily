import puppeteer from "puppeteer-extra";
import stealthPlugin from "puppeteer-extra-plugin-stealth";

puppeteer.use(stealthPlugin());

const scrape = async () => {
  const browser = await puppeteer.launch({
    headless: true,
    defaultViewport: null,
    executablePath: "/usr/bin/google-chrome",
    args: ["--no-sandbox"],
  });

  const page = await browser.newPage();
  await page.goto("https://www.freejobalert.com/odisha-government-jobs/", {
    waitUntil: "domcontentloaded",
  });

  await page.waitForSelector("table");

  const el = page.evaluate(async () => {
    const heading = document.querySelector("table");
    const tr = heading?.querySelectorAll("tr");
    const data: any = [];
    tr?.forEach((x) => {
      data.push(x.innerText);
    });
    return data;
  });
  const data = await el;
  console.log(data);
};

export { scrape };

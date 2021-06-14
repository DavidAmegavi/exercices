import { openBrowser, closeBrowser, goto, text, waitFor, click } from "taiko";
import "regenerator-runtime/runtime";

describe("check if the button really hide things", () => {
  jest.setTimeout(20000);

  beforeAll(async () => {
    await openBrowser({ headless: false });
  });

  afterAll(async () => {
    await closeBrowser();
  });

  test(`check that when launching the page, the paragraph "This is my text" is present`, async () => {
    await goto("http://localhost:8080");

    await waitFor("This is my text");
    expect.assertions(1);
    expect(await text("This is my text").exists()).toBeTruthy();
  });

  test(`click on the "Hide content" button and check if the paragraph is no longer there`, async () => {
    await goto("http://localhost:8080");
    await click("Hide content");
    await waitFor("");
    expect(await text("").exists()).toBeTruthy();
    expect.assertions(1);
  });

  test(`click on the "Hide content" button and check if the paragraph is no longer there`, async () => {
    await goto("http://localhost:8080");
    await click("Hide content");
    await click("Reveal content");
    await waitFor("This is my text");
    expect(await text("This is my text").exists()).toBeTruthy();
    expect.assertions(1);
  });
});

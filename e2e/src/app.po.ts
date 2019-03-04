import { browser, by, element, protractor } from 'protractor';


export class AppPage {
  async navigateTo() {
    return await browser.get('http://juliemr.github.io/protractor-demo//');
  }

  async firstTextEnterData(num1) {
    await element(by.model('first')).sendKeys(num1);
  }

  async secondTextEnterData(num2) {
    await element(by.model('second')).sendKeys(num2);
  }

  async gobuttonClick() {
    await element(by.id('gobutton')).click();
  }

  async getResult() {
    await element(by.binding('latest')).getText().then((result) => {
    });
    return await element(by.binding('latest')).getText();
  }
}

import { AppPage } from './app.po';
import { async, all } from 'q';
import * as calcJson from './data/calc.json';
import { from } from 'rxjs';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  calcJson.forEach((item) => {
    it('Calculator : ' + item.num1 + ' + ' + item.num2 + ' = ' + item.result, async () => {
      await page.navigateTo();
      await page.firstTextEnterData(item.num1);
      await page.secondTextEnterData(item.num2);
      await page.gobuttonClick();
      await page.getResult().then((result) => {
        expect(result).toEqual(item.result.toString())
      });
    });
  });
});


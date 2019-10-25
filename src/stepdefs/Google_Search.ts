import { binding, when, then } from "cucumber-tsflow";
import expect from 'expect';
import {firefox} from '../support/firefox';
import { By, until } from "selenium-webdriver";
@binding([firefox])
class Google_Search{

    @when(/I type query as "([^"]*)"/)
    public async query(searchQuery: string){
        await firefox.buildFirefox();
        await firefox.driver.get('https://www.google.com/ncr');
        await firefox.driver.findElement({ name: 'q' })
        .sendKeys(searchQuery + '\n');
    }
  
    @then(/^I submit$/)
    public async submit () {
      const ele = await firefox.driver.findElement({ name: 'btnK' })
      await firefox.driver.wait(until.elementIsVisible(ele),5000);
      await ele.click();
      await firefox.driver.wait(until.elementLocated(By.id("top_nav")), 5000);
    }
  
    @then(/^I should see title "([^"]*)"$/)
    public async seeTitle(titleMatch: string) {
        const title: string = await firefox.driver.getTitle();
        expect(title).toBe(titleMatch);
    }
} export = Google_Search;
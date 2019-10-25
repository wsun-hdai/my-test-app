import seleniumWebdriver, { WebDriver } from 'selenium-webdriver';

class firefox{
    static driver: WebDriver;
    static async buildFirefox()
    {
        this.driver = await new seleniumWebdriver.Builder()
        .forBrowser('firefox')
        .build();
    }


}
interface firefox {
    driver: WebDriver;
}

export {firefox};





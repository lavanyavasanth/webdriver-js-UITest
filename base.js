var webdriver = require('selenium-webdriver');
class basePage{
    constructor(){
       this.driver = new webdriver.Builder().withCapabilities(webdriver.Capabilities.chrome()).build();
    }
    navigateToHomePage(){
        this.driver.get('http://boutique.lavanyasampath.com/online_shopping/');
    }
}
module.exports = basePage;
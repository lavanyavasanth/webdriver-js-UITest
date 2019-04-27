var webdriver = require('selenium-webdriver');
var basePage = require('./base');
var By = webdriver.By;
var until = webdriver.until;
var driver;
class HomePage extends basePage {
    searchBtn(){
//        this.driver.manage().timeouts().implicitlyWait(5000);
        this.driver.findElement(By.css('#search_box')).sendKeys("blue");
        this.driver.findElement(By.css('#search_btn')).click();
    }
      printBtn(){
        this.driver.findElement(By.id('search_btn')).then(function(link){
        link.getText().then(function(text){
        console.log(text); 
        }); 
        });
    }
    printForm(){
        this.driver.findElement(By.css('[name = lastname]')).sendKeys("admin");
        this.driver.findElement(By.tagName('li')).click();
    }
    printNav(){
        this.driver.findElement(By.css(
        ))
    }
}
module.exports = new HomePage();
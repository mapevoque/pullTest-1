var functions = require('./function');
var yandexHomepage = require('./yandexHomePage');
var registerpage = require('./registerPage');
describe('PullTest1 POST', () => {

afterEach( () => {
 browser.executeScript('window.sessionStorage.clear();');
 browser.executeScript('window.localStorage.clear();');
 browser.driver.manage().deleteAllCookies();
 
  });	
  
  it('Логин на яндекс почту', () => {
    yandexHomepage.get();
	yandexHomepage.clickOnLogIn();
	registerpage.inputLogin('AutotestUser');
	registerpage.inputPassword('AutotestUser123');
	registerpage.clickOnLoginButton();
	registerpage.getUserName();
	 
  });
  
    it('Яндекс почта - логаут', () => {
    yandexHomepage.get();
	yandexHomepage.clickOnLogIn();
	registerpage.inputPasswordAfterLogOut('AutotestUser123');
	registerpage.clickOnLoginButton();
	registerpage.clickOnUserName();
	registerpage.clickOnLogOut();
	yandexHomepage.checkLogOut();
  });
});
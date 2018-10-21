var functions = require('./function');
var yandexHomepage = require('./yandexHomePage');
var registerpage = require('./registerPage');
describe('PullTest1 LogIn', () => {

afterEach( () => {
 browser.executeScript('window.sessionStorage.clear();');
 browser.executeScript('window.localStorage.clear();');
 browser.driver.manage().deleteAllCookies();
 
  });	
  
  it('Яндекс почта - невалидный пароль', () => {
    yandexHomepage.get();
    yandexHomepage.clickOnLogIn();
	registerpage.inputLogin('AutotestUser');
	registerpage.inputPassword('NoAutotestUser123');
	registerpage.clickOnLoginButton();
	registerpage.checkAlertPassword('Неверный пароль');
	 
  });
  
    it(' Яндекс почта - невалидный логин:', () => {
    yandexHomepage.get();
	yandexHomepage.clickOnLogIn();
	registerpage.inputLogin('NoAutotestUser');
	registerpage.inputPassword('AutotestUser123');
	registerpage.clickOnLoginButton();
    registerpage.checkAlertPassword('Такого аккаунта нет');
  });
});
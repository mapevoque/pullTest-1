var functions = require('./function');
var yandexHomePage = function() {	
  logIn = element(by.css('div.desk-notif-card.desk-notif-card_type_login.desk-notif-card_bg_default.i-bem.desk-notif-card_js_inited > div > a'));
  userLogIn = element(by.css('a.home-link.desk-notif-card__usermenu-switcher.home-link_black_yes'));
  videoTabs = element(by.css('div.home-arrow__tabs > div > a:nth-child(1)'));
  imageTabs = element(by.css('div.home-arrow__tabs > div > a:nth-child(2)'));
  newsTabs = element(by.css('div.home-arrow__tabs > div > a:nth-child(3)'));
  mapsTabs = element(by.css('div.home-arrow__tabs > div > a:nth-child(4)'));
  marketTabs = element(by.css('div.home-arrow__tabs > div > a:nth-child(5)'));
  translTabs = element(by.css('div.home-arrow__tabs > div > a:nth-child(6)'));
  musicTabs = element(by.css('div.home-arrow__tabs > div > a:nth-child(7)')); 
  languageList = element(by.css('div.col.headline__bar-item.b-langs > div > a > span')); 
  selectedLanguage = element(by.css('li.b-menu__item.b-menu__layout-vert-cell.b-menu__item_pos_first > span > div > a'));
  
  
  this.get = () => {
    browser.get('https://yandex.by/');
  };
  this.clickOnLogIn = () => {
    logIn.click();
  };
  this.checkLogOut = () => {
    expect(logIn.isDisplayed()).toBe(true);
  };
  this.ClickOnVideo = () => {
    videoTabs.click();
  };
  this.CheckPage = (value) => {
	  expect(browser.getCurrentUrl()).toContain(value);
  };
  this.BackToHomePage = () => {
  	browser.navigate().back();	
	};
  this.ClickOnImage = () => {
    imageTabs.click();
  };
  this.ClickOnNews = () => {
    newsTabs.click();
  };
  this.ClickOnMaps = () => {
    mapsTabs.click();
  };
  this.ClickOnMarket = () => {
    marketTabs.click();
  };
  this.ClickOnTransl = () => {
    translTabs.click();
  };
  this.ClickOnMusic = () => {
    musicTabs.click();
  };
  this.ClickOnlanguageList = () => {
    languageList.click();
  };
  this.selectLanguageFromList = () => {
    selectedLanguage.click().then(() =>{
		functions.sleep(5000);
	});
  };
  this.CheckLanguage = () => {
	  expect(languageList.getText()).toEqual('Bel');
  };
};
module.exports = new yandexHomePage();
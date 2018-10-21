var functions = require('./function');
var yandexHomepage = require('./yandexHomePage');
var registerpage = require('./registerPage');
describe('PullTest1 TRANSL', () => {
	
  
  it('Яндекс - перевод', () => {
    yandexHomepage.get();
    yandexHomepage.ClickOnlanguageList();
	yandexHomepage.selectLanguageFromList();
	yandexHomepage.CheckLanguage();
  });
  
});
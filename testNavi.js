var functions = require('./function');
var yandexHomepage = require('./yandexHomePage');
var registerpage = require('./registerPage');
describe('PullTest1 NAVI', () => {
	
  
  it('Яндекс - навигация', () => {
    yandexHomepage.get();
    yandexHomepage.ClickOnVideo();
	yandexHomepage.CheckPage('https://yandex.by/video/');	
  });
  
  it('Яндекс - навигация', () => {
	yandexHomepage.get();
	yandexHomepage.ClickOnImage();
	yandexHomepage.CheckPage('https://yandex.by/images/');
});
  it('Яндекс - навигация', () => {
	  yandexHomepage.get();
	  yandexHomepage.ClickOnNews();
	yandexHomepage.CheckPage('https://news.yandex.by/');
});
  it('Яндекс - навигация', () => {
	  yandexHomepage.get();
	yandexHomepage.ClickOnMaps();
	yandexHomepage.CheckPage('https://yandex.by/maps/');  
});
  it('Яндекс - навигация', () => {
	  yandexHomepage.get();
	yandexHomepage.ClickOnMarket();
	yandexHomepage.CheckPage('https://market.yandex.by/');  
});
  it('Яндекс - навигация', () => {
	  yandexHomepage.get();
	 yandexHomepage.ClickOnTransl();
	yandexHomepage.CheckPage('https://translate.yandex.by/'); 
});
  it('Яндекс - навигация', () => {
	  yandexHomepage.get();
	 yandexHomepage.ClickOnMusic();
	yandexHomepage.CheckPage('https://music.yandex.by/home'); 
});

});
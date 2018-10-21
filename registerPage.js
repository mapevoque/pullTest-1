var functions = require('./function');
var registerPage = function() {
  Login = element(by.css('div:nth-child(10) > label > input'));
  Password = element(by.css('div:nth-child(11) > label > input'));
  buttonLogIn = element(by.css('div:nth-child(13) > button:nth-child(1)'));
  userName = element(by.className('mail-User-Name'));
  passwordAfter = element(by.css('input.passport-Input-Controller'));
  logOut = element(by.css('#nb-4 > div > div > div:nth-child(7)'));
  alertView = element(by.className('passport-Domik-Form-Error passport-Domik-Form-Error_active'));
  
  
   
  this.inputLogin = (value) => {
     Login.sendKeys(value);
  };
  this.inputPassword = (value2) =>{
	 Password.sendKeys(value2); 
  };
  this.inputPasswordAfterLogOut = (value2) =>{
	 passwordAfter.sendKeys(value2); 
  };
  this.clickOnLoginButton = () =>{
	 buttonLogIn.click().then(() =>{
		 functions.sleep(4000);
	 }); 
  };
  this.getUserName = () =>{
	browser.wait(ExpectedConditions.visibilityOf(userName), 9000).then(() =>{
		expect(userName.getText()).toEqual('AutotestUser');  
	});	
  };
  this.clickOnUserName = () =>{
	 userName.click();
	 };
  this.clickOnLogOut = () =>{
	browser.wait(ExpectedConditions.visibilityOf(logOut), 9000).then(() =>{
		logOut.click();  
	});	};
  this.checkAlertPassword = (value) =>{
	 expect(alertView.getText()).toEqual(value); 
	 };
};
module.exports = new registerPage();
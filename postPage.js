var functions = require('./function');
var postPage = function() {
  Login = element(by.css('div:nth-child(10) > label > input'));
  Password = element(by.css('div:nth-child(11) > label > input'));
  buttonLogIn = element(by.css('div:nth-child(13) > button:nth-child(1)'));
  
  this.inputLogin = (value) => {
     Login.sendKeys(value);
  };
  this.inputPassword = (value2) =>{
	 Password.sendKeys(value2); 
  };
  this.clickOnLoginButton = () =>{
	 buttonLogIn.click().then(() =>{
		 functions.sleep(4000);
	 }); 
  };
  
};
module.exports = new postPage();
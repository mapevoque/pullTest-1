exports.config = {  
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['testTransl.js'],
  waitForAngularEnabled: false,
  suites: {
    Login: 'testLogin.js',
    Post: 'testPost.js',
	Navi: 'testNavi.js',
	Transl: 'testTransl.js'
      
  }

};
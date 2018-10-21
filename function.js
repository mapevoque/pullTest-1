module.exports = {
sleep : (delay) => {
    var start = new Date().getTime();
    while (new Date().getTime() < start + delay);},	
	angularwait : browser.waitForAngularEnabled(false),
url :(url) => {
  return () => {
    return browser.getCurrentUrl().then((actualUrl) => {
      return url != actualUrl;
    });
  };
}
};





var Browser = require('zombie');

module.exports = (function () {

  function FBMessenger (email, pass) {
    this.email = email;
    this.pass  = pass;
    this.browser;
  }

  FBMessenger.prototype.init = function () {
    this.browser = new Browser();

    var browser = this.browser,
        email   = this.email,
        pass    = this.pass;

    browser
      .visit('http://m.facebook.com')
      .then(function () {
        browser.assert.text('title', 'Welcome to Facebook');

        browser
          .fill('email', email)
          .fill('pass',  pass);

        // Log in to Facebook
        return browser.pressButton('Log In');
      })
      .then(function () {
        browser.assert.text('title', 'Facebook');
      })
      // Catch errors
      .catch(console.trace);
  }

  FBMessenger.prototype.send = function (name, message) {
    // Find friend
    var browser = this.browser;
    browser.fill('#header input[type=text]', 'Kevin Chavez');
    browser
      .pressButton('#header input[type=submit]')
      .then(function () {
        browser.assert.text('title', 'Search');

        // Go to messages page
        browser.queryAll('#objects_container form a')[1].click();
        return browser.wait();
      })
      .then(function () {
        // Enter message and send
        browser.fill('textarea', 'test message, pls ignore');
        return browser.click('input[name="Send"]');
      })
      .then(function () {
        browser.visit('http://m.facebook.com');
      })
      // Catch errors
      .catch(console.trace);
  }

  return FBMessenger;

})();


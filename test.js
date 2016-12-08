
var FBMessenger = require('./message'),
    creds       = require('./creds.json');

var messenger = new FBMessenger(creds.email, creds.pass);

messenger.init();

setTimeout(function () {
  messenger.send('Kevin Chavez', 'test msg, pls ignore');
}, 10000);

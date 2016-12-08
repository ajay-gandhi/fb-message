# FB Message

> Super simple package for sending Facebook messages programmatically

## Installation

Install using NPM:

```bash
$ npm install ajay-gandhi/fb-message
```

## Usage

Sample usage:

```js
var FBMessenger = require('fb-message');

var messenger = new FBMessenger('Facebook username', 'Facebook password');

// You must call this, initializes the headless browser
messenger.init();

// Send a message to Bob Smith saying "Hello World"
messenger.send('Bob Smith', 'Hello World');
```


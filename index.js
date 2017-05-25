const ghost = require('ghost');
const path = require('path');
const config = path.join(__dirname, 'config.js');

ghost({ config }).then(ghostServer => ghostServer.start());

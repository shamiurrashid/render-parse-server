const express = require('express');
const { ParseServer } = require('parse-server');
const app = express();

const api = new ParseServer({
  databaseURI: process.env.DATABASE_URI || 'mongodb://localhost:27017/dev',
  appId: process.env.APP_ID || 'myAppId',
  masterKey: process.env.MASTER_KEY || '',
  serverURL: process.env.SERVER_URL || 'http://localhost:1337/parse'
});

// Serve the Parse API on the /parse URL prefix
const mountPoint = process.env.PARSE_MOUNT || '/parse';
app.use(mountPoint, api.app);

app.listen(1337, () => {
  console.log('Parse Server running on port 1337');
});

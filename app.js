const express = require('express');
const app = express();
const ParseServer = require('parse-server').ParseServer;
require('dotenv').config();
const PORT = process.env.PORT;

console.log(process.env)

const server = new ParseServer({
  databaseURI: process.env.DATABASE_URI, // Connection string for your MongoDB database
  appId: process.env.APP_ID,
  masterKey: process.env.MASTER_KEY, // Keep this key secret!
  serverURL: `http://localhost:${PORT}/parse` // Don't forget to change to https if needed
});

// Start server
server.start();

// Serve the Parse API on the /parse URL prefix
app.use('/parse', server.app);

app.listen(PORT, function() {
  console.log(`Parse server running on port ${PORT}.`);
});

module.exports = app;

const express = require('express');
const { redirectUri } = require('./src/services/authService');
const { callback } = require('./src/services/authCallbackService');

const { config } = require('./src/config');

const app = express();

app.get('/', (req, res) => {
  const auth = redirectUri();
  res.redirect(auth); // Request a user's GitHub identity
});

app.get('/oauth-github-callback', (req, res) => {
  return callback(req, res); //
});

app.listen(config.port, () =>
  console.log(`App listening on http://localhost:${config.port}`),
);

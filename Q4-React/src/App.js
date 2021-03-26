import React, { useState } from 'react';
import './App.css';
import GitHubLogin from './GithubLogin';

function App() {
  const [name, setName] = useState('');

  return (
    <div className="App">
      <header className="App-header">
        {name && <h2>Hai {name}</h2>}
        <GitHubLogin
          clientId="b3aef617106821c3baae"
          clientSecret=""
          redirectUri="http://localhost:3000/"
          onSuccess={(name) => setName(name)}
          onFailure={(resp) => console.log(resp)}
        />
      </header>
    </div>
  );
}

export default App;

// cd Q4-React && npm start
// CLIENT_SECRET = 'a0bfafa4307d399d5f54faa96ff6f91deacd76d4'
// OAUTH_URL = 'https://github.com/login/oauth'
// API_URL = 'https://api.github.com'

// workflow
// Users are redirected to request their GitHub identity
// Users are redirected back to your site by GitHub
// Your app accesses the API with the user's access token

// 1. Request a user's GitHub identity,
// GET https://github.com/login/oauth/authorize?client_id=${client_id}&redirect_uri=${redirect_uri}
// 2. Users are redirected back to your site by GitHub with a temporary code query, Exchange this code for an access token
// POST https://github.com/login/oauth/access_token { client_id, client_secret, code }
// 3. Use the access token to access the Github API
// Authorization: token OAUTH-TOKEN
// GET https://api.github.com/user

# Q4: Debugging

We want to know good you are in problem solving, in this section you will handle basic errors and most common development issue. Because programmers are problem solvers that use programming languages as their tools.

We don’t want to see how expert you are at some languages, we want to know how good you are to adapt every challenge, then find the problems, and also the solutions.

**Choose at least 1 stack you want to resolve on these below options, write down your found issues, analytics, and also the solutions in the `README.md`, and also don’t forget to fix the code too, not just the `README.md`.**
**If you can solve more than one tech stacks, it will be better for you.**

## FE & Mobile

Clone and run one of these repo to your local machine. Those apps have some errors, find out and fix them. If you are done, please push them to your repository.

### FE

- [ReactJS](https://github.com/refactory-id/recruitment-reactjs-test)

## Backend

1. [NodeJS](https://github.com/refactory-id/recruitment-code-debugging)

- Expected return response:

```javascript
{
  data: {
    login: 'mazsam',
    githubId: 17076855,
    avatar: 'https://avatars2.githubusercontent.com/u/17076855?v=4',
    email: 'arifinsam.sam@gmail.com',
    name: 'Samsul Arifin',
    location: 'Blitar, Indonesia'
  }
}
```

## Solutions

Frontend (React.js) issues:

1. `App.js` file

- `client_id` = diisi sesuai dengan oauth apps yang telah dibuat sebelumnya
- `redirect_uri` =

1. bbb
2. ccc

Backend (Node.js) issues:

1. `.env` file

- OAUTH_URL = 'https://github.com/login/oauth'
- API_URL = 'https://api.github.com'

2. `app.js` file

- `const authService = require("./src/services/authService")` should be `const { redirectUri } = require("./src/services/authService")` in line 2
- `const AuthCallbackService = require('./src/services/authCallbackService')` should be `const { callback } = require('./src/services/authCallbackService')` in line 3
- `const config = require('./src/config');` should be `const { config } = require('./src/config');` in line 5
- `const auth = authService.redirectUri();` should be `const auth = redirectUri();` in line 10
- `return AuthCallbackService.callback(req, res);` should be `return callback(req, res);` in line 15
- `console.log('App listening on http://localhost:${config.port}')` should be moved to `app.listen` callback in line 18

3. `authService.js` file

- `const config = require('../config');` should be `const { config } = require('../config');` in line 7
- `module.export = { redirectUri }` should be `module.exports = { redirectUri }` in line 7

4. `userInfoService.js` file

- `const config = require('../config');` should be `const { config } = require('../config');` in line 2
- `url: '${config.apiUrl}/users'` should be `url: '${config.apiUrl}/user'` in line 7
- `module.export = getUserInfo` should be `module.exports = { getUserInfo }` in line 16
- erase `.then` and make it return `axios` function instead

5. `authCallbackService.js` file

- `const UserServices = require('./userInfoService');` should be `const { getUserInfo } = require('./userInfoService');` in line 2
- `const config = require('../config');` should be `const { config } = require('../config');` in line 3
- `.then((res) => resp.data['accessToken'])` should be `.then((res) => getUserInfo(resp?.data?.access_token))` in line 14
- `const user = UserServices.getUserInfo(accessToken);` should be `const user = const user = response?.data;` in line 16

6. `index.js` file in `src/config` folder

- `const envFound = dotenv.config();` should be moved to the top after importing `dotenv` library

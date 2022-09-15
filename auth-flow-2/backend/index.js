const express = require('express');
const cors = require('cors');
const { expressjwt: jwt } = require('express-jwt');
const jwks = require('jwks-rsa');
const app = express();

app.use(cors());

const jwtCheck = jwt({
  secret: jwks.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: 'https://dev-oirs-bxd.us.auth0.com/.well-known/jwks.json',
  }),
  audience: 'http://localhost:4000/',
  issuer: 'https://dev-oirs-bxd.us.auth0.com/',
  algorithms: ['RS256'],
}).unless({ path: ['/'] });

app.use(jwtCheck);

app.use((req, res, next) => {
  const error = new Error('not found!');
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  const status = error.status || 500;
  const message = error.message || 'internal server error';
  res.status(status).send(message);
});

app.get('/', (req, res) => {
  res.send('hello ffrom index route');
});

app.get('/protected', (req, res) => {
  res.send('hello ffrom protected route');
});

app.listen(4000, () => console.log('server running on port 4000'));

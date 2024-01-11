import app from './app';

require('dotenv').config();

const port = process.env.PORT || 5000;

app.listen(port, () => {
  /* eslint-disable no-console */
  console.log(`Listening: http://localhost:${port}`);
});

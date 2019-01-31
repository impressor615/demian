import 'source-map-support/register';
import App from './app';

const PORT: number = Number(process.env.PORT) || 3000;
const app = new App().app;

app
  .listen(PORT, () => console.log(`Express server listening at ${PORT}`))
  .on('error', err => console.error(err));

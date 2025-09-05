import express from 'express';
import router from './routes/index.js';
import esMain from 'es-main';

const app = express();

app.use(router);
if (esMain(import.meta)) {
  app.listen(1245);
}
export default app;

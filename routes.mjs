import { resolve } from 'path';
import db from './models/index.mjs';
import initItemsController from './controllers/items.mjs';

export default function bindRoutes(app) {
  const itemsController = initItemsController(db);

  app.get('/items', itemsController.index);

  // special JS page. Include the webpack main.html file
  app.get('/home', (request, response) => {
    response.sendFile(resolve('dist', 'main.html'));
  });
}
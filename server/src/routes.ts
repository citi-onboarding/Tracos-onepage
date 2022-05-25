import express from 'express';
import UserController from '@controllers/UserController';
import TattooistsController from '@controllers/TattooistsControllers';

const routes = express.Router();
const userController = new UserController();
const tattooistsController = new TattooistsController();

routes.post('/user', userController.create);
routes.get('/user', userController.get);
routes.delete('/user/:id', userController.delete);
routes.put('/user/:id', userController.update);

routes.post('/tattooists', tattooistsController.create);
routes.get('/tattooists', tattooistsController.get);
routes.delete('/tattooists/:id', tattooistsController.delete);
routes.put('/tattooists/:id', tattooistsController.update);

export default routes;
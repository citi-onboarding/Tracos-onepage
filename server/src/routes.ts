import express from 'express';
import UserController from '@controllers/UserController'
import IntroductionController from '@controllers/IntroductionController';

const routes = express.Router();
const userController = new UserController();
const introductionController = new IntroductionController();

routes.post('/user', userController.create);
routes.get('/user', userController.get);
routes.delete('/user/:id', userController.delete);
routes.put('/user/:id', userController.update);

routes.post('/introduction', introductionController.create);
routes.get('/introduction', introductionController.get);
routes.delete('/introduction/:id', introductionController.delete);
routes.put('/introduction/:id', introductionController.update);

export default routes;
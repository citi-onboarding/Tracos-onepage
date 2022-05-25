import express from 'express';
import UserController from '@controllers/UserController'
import VantagensPessoasTatuadasController from '@controllers/VantagensPessoasTatuadasController'

const routes = express.Router();
const userController = new UserController();
const vantagensPessoasTatuadasController = new VantagensPessoasTatuadasController();

routes.post('/user', userController.create);
routes.get('/user', userController.get);
routes.delete('/user/:id', userController.delete);
routes.put('/user/:id', userController.update);

routes.post('/vantagensPessoasTatuadas', vantagensPessoasTatuadasController.create);
routes.get('/vantagensPessoasTatuadas', vantagensPessoasTatuadasController.get);
routes.delete('/vantagensPessoasTatuadas/:id', vantagensPessoasTatuadasController.delete);
routes.put('/vantagensPessoasTatuadas/:id', vantagensPessoasTatuadasController.update);

export default routes;
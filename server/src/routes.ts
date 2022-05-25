import express from 'express';
import UserController from '@controllers/UserController'
import TattooedPeopleAdvantagesController from '@controllers/TattooedPeopleAdvantagesController'

const routes = express.Router();
const userController = new UserController();
const tattooedPeopleAdvantagesController = new TattooedPeopleAdvantagesController();

routes.post('/user', userController.create);
routes.get('/user', userController.get);
routes.delete('/user/:id', userController.delete);
routes.put('/user/:id', userController.update);

routes.post('/tattooedPeopleAdvantages', tattooedPeopleAdvantagesController.create);
routes.get('/tattooedPeopleAdvantages', tattooedPeopleAdvantagesController.get);
routes.delete('/tattooedPeopleAdvantages/:id', tattooedPeopleAdvantagesController.delete);
routes.put('/tattooedPeopleAdvantages/:id', tattooedPeopleAdvantagesController.update);

export default routes;
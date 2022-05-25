import express from 'express';
import UserController from '@controllers/UserController'
import TattooArtistsAdvantagesController from '@controllers/TattooArtistsAdvantagesController'

const routes = express.Router();
const userController = new UserController();
const tattooArtistsAdvantagesController = new TattooArtistsAdvantagesController();

routes.post('/user', userController.create);
routes.get('/user', userController.get);
routes.delete('/user/:id', userController.delete);
routes.put('/user/:id', userController.update);

routes.post('/tattooArtistsAdvantages', tattooArtistsAdvantagesController.create);
routes.get('/tattooArtistsAdvantages', tattooArtistsAdvantagesController.get);
routes.delete('/tattooArtistsAdvantages/:id', tattooArtistsAdvantagesController.delete);
routes.put('/tattooArtistsAdvantages/:id', tattooArtistsAdvantagesController.update);


export default routes;
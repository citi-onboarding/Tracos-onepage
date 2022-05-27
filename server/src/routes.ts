import express from 'express';
import UserController from '@controllers/UserController'
import TattooArtistsAdvantagesController from '@controllers/TattooArtistsAdvantagesController'
import TattooistsController from '@controllers/TattooistsControllers';
import FooterController from '@controllers/FooterController';
import ContactController from '@controllers/ContactController'

const tattooArtistsAdvantagesController = new TattooArtistsAdvantagesController();
const routes = express.Router();
const userController = new UserController();
const tattooistsController = new TattooistsController();
const footerController = new FooterController();
const contactController = new ContactController();

routes.post('/user', userController.create);
routes.get('/user', userController.get);
routes.delete('/user/:id', userController.delete);
routes.put('/user/:id', userController.update);

routes.post('/tattooArtistsAdvantages', tattooArtistsAdvantagesController.create);
routes.get('/tattooArtistsAdvantages', tattooArtistsAdvantagesController.get);
routes.delete('/tattooArtistsAdvantages/:id', tattooArtistsAdvantagesController.delete);
routes.put('/tattooArtistsAdvantages/:id', tattooArtistsAdvantagesController.update);
routes.post('/tattooists', tattooistsController.create);
routes.get('/tattooists', tattooistsController.get);
routes.delete('/tattooists/:id', tattooistsController.delete);
routes.put('/tattooists/:id', tattooistsController.update);
routes.post('/footer', footerController.create);
routes.get('/footer', footerController.get);
routes.delete('/footer/:id', footerController.delete);
routes.put('/footer/:id', footerController.update);

routes.post('/contact', contactController.create);
routes.get('/contact', contactController.get);
routes.delete('/contact/:id', contactController.delete);
routes.put('/contact/:id', contactController.update);

export default routes;
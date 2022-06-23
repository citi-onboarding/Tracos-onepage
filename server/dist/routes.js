"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _UserController = _interopRequireDefault(require("./controllers/UserController"));

var _TattooedPeopleAdvantagesController = _interopRequireDefault(require("./controllers/TattooedPeopleAdvantagesController"));

var _IntroductionController = _interopRequireDefault(require("./controllers/IntroductionController"));

var _TattooArtistsAdvantagesController = _interopRequireDefault(require("./controllers/TattooArtistsAdvantagesController"));

var _TattooistsControllers = _interopRequireDefault(require("./controllers/TattooistsControllers"));

var _FooterController = _interopRequireDefault(require("./controllers/FooterController"));

var _ContactController = _interopRequireDefault(require("./controllers/ContactController"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const tattooArtistsAdvantagesController = new _TattooArtistsAdvantagesController.default();

const routes = _express.default.Router();

const userController = new _UserController.default();
const tattooedPeopleAdvantagesController = new _TattooedPeopleAdvantagesController.default();
const introductionController = new _IntroductionController.default();
const contactController = new _ContactController.default();
const tattooistsController = new _TattooistsControllers.default();
const footerController = new _FooterController.default();
routes.post('/user', userController.create);
routes.get('/user', userController.get);
routes.delete('/user/:id', userController.delete);
routes.put('/user/:id', userController.update);
routes.post('/tattooedPeopleAdvantages', tattooedPeopleAdvantagesController.create);
routes.get('/tattooedPeopleAdvantages', tattooedPeopleAdvantagesController.get);
routes.delete('/tattooedPeopleAdvantages/:id', tattooedPeopleAdvantagesController.delete);
routes.put('/tattooedPeopleAdvantages/:id', tattooedPeopleAdvantagesController.update);
routes.post('/introduction', introductionController.create);
routes.get('/introduction', introductionController.get);
routes.delete('/introduction/:id', introductionController.delete);
routes.put('/introduction/:id', introductionController.update);
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
var _default = routes;
exports.default = _default;
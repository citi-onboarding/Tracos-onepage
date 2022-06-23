"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Footer = require("../models/Footer");

var _global = require("../global");

class FooterController {
  async create(request, response) {
    const {
      phone,
      address,
      linkAppleStore,
      linkGooglePlay,
      linkInstagram,
      linkTwitter,
      linkPrivacy
    } = request.body;

    const isAnyUndefined = _global.Citi.areValuesUndefined(phone, address, linkAppleStore, linkGooglePlay, linkInstagram, linkTwitter, linkPrivacy);

    if (isAnyUndefined) return response.status(400).send();
    const newFooter = {
      phone,
      address,
      linkAppleStore,
      linkGooglePlay,
      linkInstagram,
      linkTwitter,
      linkPrivacy
    };
    const {
      httpStatus,
      message
    } = await _global.Citi.insertIntoDatabase(_Footer.Footer, newFooter);
    return response.status(httpStatus).send({
      message
    });
  }

  async get(request, response) {
    const {
      httpStatus,
      values
    } = await _global.Citi.getAll(_Footer.Footer);
    return response.status(httpStatus).send(values);
  }

  async update(request, response) {
    const {
      id
    } = request.params;
    const {
      phone,
      address,
      linkAppleStore,
      linkGooglePlay,
      linkInstagram,
      linkTwitter,
      linkPrivacy
    } = request.body;

    const isAnyUndefined = _global.Citi.areValuesUndefined(phone, address, linkAppleStore, linkGooglePlay, linkInstagram, linkTwitter, linkPrivacy, id);

    if (isAnyUndefined) return response.status(400).send();
    const footerWithUpdateValues = {
      phone,
      address,
      linkAppleStore,
      linkGooglePlay,
      linkInstagram,
      linkTwitter,
      linkPrivacy
    };
    const {
      httpStatus,
      messageFromUpdate
    } = await _global.Citi.updateValue(_Footer.Footer, id, footerWithUpdateValues);
    return response.status(httpStatus).send({
      messageFromUpdate
    });
  }

  async delete(request, response) {
    const {
      id
    } = request.params;
    const {
      value: footerFound,
      message
    } = await _global.Citi.findByID(_Footer.Footer, id);
    if (!footerFound) return response.status(400).send({
      message
    });
    const {
      httpStatus,
      messageFromDelete
    } = await _global.Citi.deleteValue(_Footer.Footer, footerFound);
    return response.status(httpStatus).send({
      messageFromDelete
    });
  }

}

exports.default = FooterController;
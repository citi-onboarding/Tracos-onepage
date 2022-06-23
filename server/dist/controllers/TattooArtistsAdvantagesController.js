"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _TattooArtistsAdvantages = require("../models/TattooArtistsAdvantages");

var _global = require("../global");

class TattooArtistsAdvantagesController {
  async create(request, response) {
    const {
      title,
      img,
      description
    } = request.body;

    const isAnyUndefined = _global.Citi.areValuesUndefined(title, img, description);

    if (isAnyUndefined) return response.status(400).send();
    const newTattooArtistsAdvantage = {
      title,
      img,
      description
    };
    const {
      httpStatus,
      message
    } = await _global.Citi.insertIntoDatabase(_TattooArtistsAdvantages.TattooArtistsAdvantages, newTattooArtistsAdvantage);
    return response.status(httpStatus).send({
      message
    });
  }

  async get(request, response) {
    const {
      httpStatus,
      values
    } = await _global.Citi.getAll(_TattooArtistsAdvantages.TattooArtistsAdvantages);
    return response.status(httpStatus).send(values);
  }

  async delete(request, response) {
    const {
      id
    } = request.params;
    const {
      value: tattooArtistsAdvantageFound,
      message
    } = await _global.Citi.findByID(_TattooArtistsAdvantages.TattooArtistsAdvantages, id);
    if (!tattooArtistsAdvantageFound) return response.status(400).send({
      message
    });
    const {
      httpStatus,
      messageFromDelete
    } = await _global.Citi.deleteValue(_TattooArtistsAdvantages.TattooArtistsAdvantages, tattooArtistsAdvantageFound);
    return response.status(httpStatus).send({
      messageFromDelete
    });
  }

  async update(request, response) {
    const {
      id
    } = request.params;
    const {
      title,
      img,
      description
    } = request.body;

    const isAnyUndefined = _global.Citi.areValuesUndefined(title, img, description);

    if (isAnyUndefined) return response.status(400).send();
    const updatedTattooArtistsAdvantage = {
      title,
      img,
      description
    };
    const {
      httpStatus,
      messageFromUpdate
    } = await _global.Citi.updateValue(_TattooArtistsAdvantages.TattooArtistsAdvantages, id, updatedTattooArtistsAdvantage);
    return response.status(httpStatus).send({
      messageFromUpdate
    });
  }

}

exports.default = TattooArtistsAdvantagesController;
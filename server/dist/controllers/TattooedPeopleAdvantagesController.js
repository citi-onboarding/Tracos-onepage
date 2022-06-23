"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _TattooedPeopleAdvantages = require("../models/TattooedPeopleAdvantages");

var _global = require("../global");

class TattooedPeopleAdvantagesController {
  async create(request, response) {
    const {
      image,
      title,
      description
    } = request.body;

    const isAnyUndefined = _global.Citi.areValuesUndefined(image, title, description);

    if (isAnyUndefined) return response.status(400).send();
    const newTattooedPeopleAdvantages = {
      image,
      title,
      description
    };
    const {
      httpStatus,
      message
    } = await _global.Citi.insertIntoDatabase(_TattooedPeopleAdvantages.TattooedPeopleAdvantages, newTattooedPeopleAdvantages);
    return response.status(httpStatus).send({
      message
    });
  }

  async get(request, response) {
    const {
      httpStatus,
      values
    } = await _global.Citi.getAll(_TattooedPeopleAdvantages.TattooedPeopleAdvantages);
    return response.status(httpStatus).send(values);
  }

  async delete(request, response) {
    const {
      id
    } = request.params;
    const {
      value: tattooedPeopleAdvantagesFound,
      message
    } = await _global.Citi.findByID(_TattooedPeopleAdvantages.TattooedPeopleAdvantages, id);
    if (!tattooedPeopleAdvantagesFound) return response.status(400).send({
      message
    });
    const {
      httpStatus,
      messageFromDelete
    } = await _global.Citi.deleteValue(_TattooedPeopleAdvantages.TattooedPeopleAdvantages, tattooedPeopleAdvantagesFound);
    return response.status(httpStatus).send({
      messageFromDelete
    });
  }

  async update(request, response) {
    const {
      id
    } = request.params;
    const {
      image,
      title,
      description
    } = request.body;

    const isAnyUndefined = _global.Citi.areValuesUndefined(image, title, description, id);

    if (isAnyUndefined) return response.status(400).send();
    const tattooedPeopleAdvantagesWithUpdatedValues = {
      image,
      title,
      description
    };
    const {
      httpStatus,
      messageFromUpdate
    } = await _global.Citi.updateValue(_TattooedPeopleAdvantages.TattooedPeopleAdvantages, id, tattooedPeopleAdvantagesWithUpdatedValues);
    return response.status(httpStatus).send({
      messageFromUpdate
    });
  }

}

exports.default = TattooedPeopleAdvantagesController;
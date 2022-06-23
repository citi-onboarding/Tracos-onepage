"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Tattooists = require("../models/Tattooists");

var _global = require("../global");

class TattooistsController {
  async create(request, response) {
    const {
      image,
      name,
      description
    } = request.body;

    const isAnyUndefined = _global.Citi.areValuesUndefined(image, name, description);

    if (isAnyUndefined) return response.status(400).send();
    const newTattooists = {
      image,
      name,
      description
    };
    const {
      httpStatus,
      message
    } = await _global.Citi.insertIntoDatabase(_Tattooists.Tattooists, newTattooists);
    return response.status(httpStatus).send({
      message
    });
  }

  async get(request, response) {
    const {
      httpStatus,
      values
    } = await _global.Citi.getAll(_Tattooists.Tattooists);
    return response.status(httpStatus).send(values);
  }

  async delete(request, response) {
    const {
      id
    } = request.params;
    const {
      value: userFound,
      message
    } = await _global.Citi.findByID(_Tattooists.Tattooists, id);
    if (!userFound) return response.status(400).send({
      message
    });
    const {
      httpStatus,
      messageFromDelete
    } = await _global.Citi.deleteValue(_Tattooists.Tattooists, userFound);
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
      name,
      description
    } = request.body;

    const isAnyUndefined = _global.Citi.areValuesUndefined(image, name, description, id);

    if (isAnyUndefined) return response.status(400).send();
    const userWithUpdatedValues = {
      image,
      name,
      description
    };
    const {
      httpStatus,
      messageFromUpdate
    } = await _global.Citi.updateValue(_Tattooists.Tattooists, id, userWithUpdatedValues);
    return response.status(httpStatus).send({
      messageFromUpdate
    });
  }

}

exports.default = TattooistsController;
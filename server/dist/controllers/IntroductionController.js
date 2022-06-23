"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Introduction = require("../models/Introduction");

var _global = require("../global");

class IntroductionController {
  async create(request, response) {
    const {
      image,
      video,
      link
    } = request.body;

    const isAnyUndefined = _global.Citi.areValuesUndefined(image, video, link);

    if (isAnyUndefined) return response.status(400).send();
    const newIntroduction = {
      image,
      video,
      link
    };
    const {
      httpStatus,
      message
    } = await _global.Citi.insertIntoDatabase(_Introduction.Introduction, newIntroduction);
    return response.status(httpStatus).send({
      message
    });
  }

  async get(request, response) {
    const {
      httpStatus,
      values
    } = await _global.Citi.getAll(_Introduction.Introduction);
    return response.status(httpStatus).send(values);
  }

  async delete(request, response) {
    const {
      id
    } = request.params;
    const {
      value: introductionFound,
      message
    } = await _global.Citi.findByID(_Introduction.Introduction, id);
    if (!introductionFound) return response.status(400).send({
      message
    });
    const {
      httpStatus,
      messageFromDelete
    } = await _global.Citi.deleteValue(_Introduction.Introduction, introductionFound);
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
      video,
      link
    } = request.body;

    const isAnyUndefined = _global.Citi.areValuesUndefined(image, video, link, id);

    if (isAnyUndefined) return response.status(400).send();
    const userWithUpdatedValues = {
      image,
      video,
      link
    };
    const {
      httpStatus,
      messageFromUpdate
    } = await _global.Citi.updateValue(_Introduction.Introduction, id, userWithUpdatedValues);
    return response.status(httpStatus).send({
      messageFromUpdate
    });
  }

}

exports.default = IntroductionController;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Contact = require("../models/Contact");

var _global = require("../global");

var _nodemailer = _interopRequireDefault(require("../services/nodemailer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class ContactController {
  async create(request, response) {
    const {
      email,
      name,
      description,
      referrer,
      phone
    } = request.body;

    const isAnyUndefined = _global.Citi.areValuesUndefined(email, name, description, referrer, phone);

    if (isAnyUndefined) return response.status(400).send();
    const newContact = {
      email,
      name,
      description,
      referrer,
      phone
    };
    const {
      httpStatus,
      message
    } = await _global.Citi.insertIntoDatabase(_Contact.Contact, newContact);
    (0, _nodemailer.default)(name, email, phone, referrer, description);
    return response.status(httpStatus).send({
      message
    });
  }

  async get(request, response) {
    const {
      httpStatus,
      values
    } = await _global.Citi.getAll(_Contact.Contact);
    return response.status(httpStatus).send(values);
  }

  async delete(request, response) {
    const {
      id
    } = request.params;
    const {
      value: contactFound,
      message
    } = await _global.Citi.findByID(_Contact.Contact, id);
    if (!contactFound) return response.status(400).send({
      message
    });
    const {
      httpStatus,
      messageFromDelete
    } = await _global.Citi.deleteValue(_Contact.Contact, contactFound);
    return response.status(httpStatus).send({
      messageFromDelete
    });
  }

  async update(request, response) {
    const {
      id
    } = request.params;
    const {
      email,
      name,
      description,
      referrer,
      phone
    } = request.body;

    const isAnyUndefined = _global.Citi.areValuesUndefined(email, name, description, referrer, phone, id);

    if (isAnyUndefined) return response.status(400).send();
    const contactWithUpdatedValues = {
      email,
      name,
      description,
      referrer,
      phone
    };
    const {
      httpStatus,
      messageFromUpdate
    } = await _global.Citi.updateValue(_Contact.Contact, id, contactWithUpdatedValues);
    return response.status(httpStatus).send({
      messageFromUpdate
    });
  }

}

exports.default = ContactController;
import { Request, Response } from 'express';
import { Contact } from '@models/Contact';
import { Citi, Crud } from '../global'

import sendMail from '../services/nodemailer'

export default class ContactController implements Crud {

    async create(request: Request, response: Response) {
        const { email, name, description, referrer, phone } = request.body;

        const isAnyUndefined = Citi.areValuesUndefined(email, name, description, referrer, phone);
        if (isAnyUndefined) return response.status(400).send();

        const newContact = { email, name, description, referrer, phone };
        const { httpStatus, message } = await Citi.insertIntoDatabase(Contact, newContact);

        sendMail(name, email, phone, referrer, description);
        return response.status(httpStatus).send({ message });
    }

    async get(request: Request, response: Response) {
        const { httpStatus, values } = await Citi.getAll(Contact);
        return response.status(httpStatus).send(values);
    }

    async delete(request: Request, response: Response) {
        const { id } = request.params;
        const { value: contactFound, message } = await Citi.findByID(Contact, id);

        if (!contactFound) return response.status(400).send({ message });

        const { httpStatus, messageFromDelete } = await Citi.deleteValue(Contact, contactFound);
        return response.status(httpStatus).send({ messageFromDelete });
    }

    async update(request: Request, response: Response) {
        const { id } = request.params;
        const { email, name, description, referrer, phone } = request.body;

        const isAnyUndefined = Citi.areValuesUndefined(email, name, description, referrer, phone, id);
        if (isAnyUndefined) return response.status(400).send();

        const contactWithUpdatedValues = { email, name, description, referrer, phone };

        const { httpStatus, messageFromUpdate } = await Citi.updateValue(Contact, id, contactWithUpdatedValues);
        return response.status(httpStatus).send({ messageFromUpdate });
    }


}
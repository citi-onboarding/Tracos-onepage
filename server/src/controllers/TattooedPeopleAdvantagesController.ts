import { Request, Response } from 'express';
import { TattooedPeopleAdvantages } from '@models/TattooedPeopleAdvantages';
import { Citi, Crud } from '../global'

export default class TattooedPeopleAdvantagesController implements Crud {

    async create(request: Request, response: Response) {
        const { image, title, description } = request.body;

        const isAnyUndefined = Citi.areValuesUndefined(image, title, description);
        if (isAnyUndefined) return response.status(400).send();

        const newTattooedPeopleAdvantages = { image, title, description };
        const { httpStatus, message } = await Citi.insertIntoDatabase(TattooedPeopleAdvantages, newTattooedPeopleAdvantages);

        return response.status(httpStatus).send({ message });
    }

    async get(request: Request, response: Response) {
        const { httpStatus, values } = await Citi.getAll(TattooedPeopleAdvantages);
        return response.status(httpStatus).send(values);
    }

    async delete(request: Request, response: Response) {
        const { id } = request.params;
        const { value: tattooedPeopleAdvantagesFound, message } = await Citi.findByID(TattooedPeopleAdvantages, id);

        if (!tattooedPeopleAdvantagesFound) return response.status(400).send({ message });

        const { httpStatus, messageFromDelete } = await Citi.deleteValue(TattooedPeopleAdvantages, tattooedPeopleAdvantagesFound);
        return response.status(httpStatus).send({ messageFromDelete });
    }

    async update(request: Request, response: Response) {
        const { id } = request.params;
        const { image, title, description } = request.body;

        const isAnyUndefined = Citi.areValuesUndefined(image, title, description, id);
        if (isAnyUndefined) return response.status(400).send();

        const tattooedPeopleAdvantagesWithUpdatedValues = { image, title, description };

        const { httpStatus, messageFromUpdate } = await Citi.updateValue(TattooedPeopleAdvantages, id, tattooedPeopleAdvantagesWithUpdatedValues);
        return response.status(httpStatus).send({ messageFromUpdate });
    }


}
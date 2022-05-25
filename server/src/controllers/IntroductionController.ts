import { Request, Response } from 'express'
import { Introduction } from '@models/Introduction'
import { Citi, Crud } from '../global'

export default class IntroductionController implements Crud {
    
    async create(request: Request, response: Response){
        const {image, video, link} = request.body;

        const isAnyUndefined = Citi.areValuesUndefined(image, video, link);
        if(isAnyUndefined) return response.status(400).send();

        const newIntroduction = { image, video, link };
        const {httpStatus, message} = await Citi.insertIntoDatabase(Introduction, newIntroduction);

        return response.status(httpStatus).send({ message });
    }

    async get(request: Request, response: Response){
        const {httpStatus, values} = await Citi.getAll(Introduction);
        return response.status(httpStatus).send(values);
    }

    async delete(request: Request, response: Response){
        const { id } = request.params;
        const {value: introductionFound, message } = await Citi.findByID(Introduction, id);

        if(!introductionFound) return response.status(400).send({ message });

        const {httpStatus, messageFromDelete} = await Citi.deleteValue(Introduction, introductionFound);
        return response.status(httpStatus).send({ messageFromDelete });
    }

    async update(request: Request, response: Response){
        const { id } = request.params;
        const { image, video, link } = request.body;

        const isAnyUndefined = Citi.areValuesUndefined(image, video, link, id);
        if(isAnyUndefined) return response.status(400).send();

        const userWithUpdatedValues = { image, video, link };

        const { httpStatus, messageFromUpdate } = await Citi.updateValue(Introduction, id, userWithUpdatedValues);
        return response.status(httpStatus).send({ messageFromUpdate });
    }

}
import { Request, Response } from 'express';
import { Tattooists } from '@models/Tattooists';
import { Citi, Crud } from '../global'

export default class TattooistsController implements Crud {

    async create(request: Request, response: Response){
        const {image, name, description} = request.body;

        const isAnyUndefined = Citi.areValuesUndefined(image, name, description);
        if(isAnyUndefined) return response.status(400).send();

        const newTattooists = { image, name, description };
        const {httpStatus, message} = await Citi.insertIntoDatabase(Tattooists, newTattooists);

        return response.status(httpStatus).send({ message });
    }

    async get(request: Request, response: Response){
        const {httpStatus, values} = await Citi.getAll(Tattooists);
        return response.status(httpStatus).send(values);
    }

    async delete(request: Request, response: Response){
        const { id } = request.params;
        const {value: userFound, message } = await Citi.findByID(Tattooists, id); 
           
        if(!userFound) return response.status(400).send({ message });

        const {httpStatus, messageFromDelete } = await Citi.deleteValue(Tattooists, userFound);
        return response.status(httpStatus).send({ messageFromDelete });
    }

    async update(request: Request, response: Response){
        const { id } = request.params;
        const {image, name, description } = request.body;

        const isAnyUndefined = Citi.areValuesUndefined(image, name, description, id);
        if(isAnyUndefined) return response.status(400).send();

        const userWithUpdatedValues = { image, name, description };

        const { httpStatus, messageFromUpdate } = await Citi.updateValue(Tattooists, id, userWithUpdatedValues);
        return response.status(httpStatus).send({ messageFromUpdate });
    }

    
}
import { Request, Response } from 'express';
import { VantagensPessoasTatuadas } from '@models/VantagensPessoasTatuadas';
import { Citi, Crud } from '../global'

export default class VantagensPessoasTatuadasController implements Crud {

    async create(request: Request, response: Response) {
        const { image, title, description } = request.body;

        const isAnyUndefined = Citi.areValuesUndefined(image, title, description);
        if (isAnyUndefined) return response.status(400).send();

        const newVantagensPessoasTatuadas = { image, title, description };
        const { httpStatus, message } = await Citi.insertIntoDatabase(VantagensPessoasTatuadas, newVantagensPessoasTatuadas);

        return response.status(httpStatus).send({ message });
    }

    async get(request: Request, response: Response) {
        const { httpStatus, values } = await Citi.getAll(VantagensPessoasTatuadas);
        return response.status(httpStatus).send(values);
    }

    async delete(request: Request, response: Response) {
        const { id } = request.params;
        const { value: vantagensPessoasTatuadasFound, message } = await Citi.findByID(VantagensPessoasTatuadas, id);

        if (!vantagensPessoasTatuadasFound) return response.status(400).send({ message });

        const { httpStatus, messageFromDelete } = await Citi.deleteValue(VantagensPessoasTatuadas, vantagensPessoasTatuadasFound);
        return response.status(httpStatus).send({ messageFromDelete });
    }

    async update(request: Request, response: Response) {
        const { id } = request.params;
        const { image, title, description } = request.body;

        const isAnyUndefined = Citi.areValuesUndefined(image, title, description, id);
        if (isAnyUndefined) return response.status(400).send();

        const vantagensPessoasTatuadasWithUpdatedValues = { image, title, description };

        const { httpStatus, messageFromUpdate } = await Citi.updateValue(VantagensPessoasTatuadas, id, vantagensPessoasTatuadasWithUpdatedValues);
        return response.status(httpStatus).send({ messageFromUpdate });
    }


}
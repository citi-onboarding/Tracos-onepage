import { Request, Response } from 'express';
import { Footer } from '@models/Footer';
import { Citi, Crud } from '../global'

export default class FooterController implements Crud{

    async create(request: Request, response: Response){
        const {phone, address, linkAppleStore, linkGooglePlay, linkInstagram, linkTwitter} = request.body;

        const isAnyUndefined = Citi.areValuesUndefined(phone, address, linkAppleStore, linkGooglePlay, linkInstagram, linkTwitter);
        if(isAnyUndefined) return response.status(400).send();

        const newFooter = { phone, address, linkAppleStore, linkGooglePlay, linkInstagram, linkTwitter };
        const {httpStatus, message} = await Citi.insertIntoDatabase(Footer, newFooter);

        return response.status(httpStatus).send({ message });
    }

    async get(request: Request, response: Response){
        const {httpStatus, values} = await Citi.getAll(Footer);
        return response.status(httpStatus).send(values);
    }

    async update(request: Request, response: Response){ 
        const { id } = request.params;
        const{phone, address, linkAppleStore, linkGooglePlay, linkPrivacy} = request.body;

        const isAnyUndefined = Citi.areValuesUndefined(phone, address, linkAppleStore, linkGooglePlay, linkPrivacy, id);
        if(isAnyUndefined) return response.status(400).send();

        const footerWithUpdateValues = { phone, address, linkAppleStore, linkGooglePlay, linkPrivacy };

        const { httpStatus, messageFromUpdate } = await Citi.updateValue(Footer, id, footerWithUpdateValues);
        return response.status(httpStatus).send({ messageFromUpdate });
    }

    async delete(request: Request, response: Response){
        const { id } = request.params;
        const {value: footerFound, message } = await Citi.findByID(Footer, id);

        if(!footerFound) return response.status(400).send({ message });

        const {httpStatus, messageFromDelete} = await Citi.deleteValue(Footer, footerFound);
        return response.status(httpStatus).send({ messageFromDelete });
    }

}
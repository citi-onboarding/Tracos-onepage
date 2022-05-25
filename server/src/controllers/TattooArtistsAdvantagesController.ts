import { Request, Response } from 'express';
import { TattooArtistsAdvantages } from '@models/TattooArtistsAdvantages'
import { Citi, Crud } from '../global'

export default class VantagensTatuadoresController implements Crud {
    
    async create(request: Request, response: Response) {
        const { title, img, description } = request.body

        const isAnyUndefined = Citi.areValuesUndefined(title, img, description)
        if (isAnyUndefined) return response.status(400).send()
        
        const newTattooArtistsAdvantage = { title, img, description }
        const { httpStatus, message } = await Citi.insertIntoDatabase(TattooArtistsAdvantages, newTattooArtistsAdvantage)
    
        return response.status(httpStatus).send({ message })
    }

    async get(request: Request, response: Response) {
        const { httpStatus, values } = await Citi.getAll(TattooArtistsAdvantages)
        return response.status(httpStatus).send(values)        
    }

    async delete(request: Request, response: Response) {
        const { id } = request.params
        const {value: tattooArtistsAdvantageFound, message} = await Citi.findByID(TattooArtistsAdvantages, id)

        if (!tattooArtistsAdvantageFound) return response.status(400).send({ message })

        const { httpStatus, messageFromDelete } = await Citi.deleteValue(TattooArtistsAdvantages, tattooArtistsAdvantageFound)
        return response.status(httpStatus).send({ messageFromDelete })        
    }

    async update(request: Request, response: Response) {
        const { id } = request.params
        const { title, img, description } = request.body

        const isAnyUndefined = Citi.areValuesUndefined(title, img, description)
        if (isAnyUndefined) return response.status(400).send()

        const updatedTattooArtistsAdvantage = { title, img, description }

        const { httpStatus, messageFromUpdate } = await Citi.updateValue(TattooArtistsAdvantages, id, updatedTattooArtistsAdvantage)
        return response.status(httpStatus).send({ messageFromUpdate })
    }
    
}
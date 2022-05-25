import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class TattooedPeopleAdvantages {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    image: string

    @Column()
    title: string

    @Column()
    description: string

}

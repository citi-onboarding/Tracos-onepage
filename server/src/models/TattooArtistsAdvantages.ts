import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class TattooArtistsAdvantages {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    title: string

    @Column()
    img: string

    @Column()
    description: string
}
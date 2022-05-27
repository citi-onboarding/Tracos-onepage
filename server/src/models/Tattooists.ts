import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class Tattooists {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    image: string

    @Column()
    name: string

    @Column()
    description: string

}
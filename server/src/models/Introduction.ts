import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class Introduction{

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    image: string

    @Column()
    video: string

    @Column()
    link: string

}
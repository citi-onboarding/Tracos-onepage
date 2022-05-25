import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class Footer{

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    phone: number

    @Column()
    address: string

    @Column()
    linkAppleStore: string

    @Column()
    linkGooglePlay: string

    @Column()
    linkPrivacy: string

}
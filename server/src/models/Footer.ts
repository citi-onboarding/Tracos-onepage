import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class Footer{

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    phone: string

    @Column()
    address: string

    @Column()
    linkAppleStore: string

    @Column()
    linkGooglePlay: string

    @Column()
    linkInstagram: string

    @Column()
    linkTwitter: string

    @Column()
    linkPrivacy: string
}
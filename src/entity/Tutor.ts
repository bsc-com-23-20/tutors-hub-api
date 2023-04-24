import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class Tutor {

    @PrimaryGeneratedColumn('increment')
    id: number

    @Column({
        length: 50,
})
    firstName: string

    @Column({
        length: 50,
})
    lastName: string

    @Column()
    emailAddress: string

    @Column()
    subject: string


    @Column()
    experience: string

    @Column()
    imageUrl: string

    @Column()
    modeOfDelivery: string

    @Column()
    contactDetails: string
}
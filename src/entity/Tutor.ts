import { Entity, PrimaryGeneratedColumn, Column,OneToMany } from "typeorm"
import {Reviews} from "./Reviews"

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
    password: string


    @Column()
    experience: string

    @Column()
    imageUrl: string

    @Column()
    modeOfDelivery: string

    @Column()
    contactDetails: string

    @Column()
    location: string


    @OneToMany(() => Reviews, (review) => review.tutorID)
    reviews: Reviews[]
}

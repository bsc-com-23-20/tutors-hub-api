import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm"
import {Tutor} from "./Tutor"

@Entity()
export class Reviews {

    @PrimaryGeneratedColumn()
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
    comment: string

    @ManyToOne(() => Tutor, (user) => user.reviews)
   
    user: Tutor
}



import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class Tutor {

    @PrimaryGeneratedColumn()
    id: number

    @Column({
        length: 50,
    })
    firstName: string

    @Column()
    lastName: string

    @Column()
    subject: number

}

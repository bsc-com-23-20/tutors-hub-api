import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

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
}
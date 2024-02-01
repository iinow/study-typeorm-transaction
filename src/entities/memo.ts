import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from 'typeorm'

@Entity()
export class Memo {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    content: string

    public static create(content: string): Memo {
        const memo = new Memo()
        memo.content = content
        return memo
    }
}


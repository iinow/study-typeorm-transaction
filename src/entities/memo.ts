import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from 'typeorm'

@Entity()
export class Memo {
    @PrimaryGeneratedColumn()
    id: number

    @Column({
        comment: '메모 내용',
    })
    content: string

    public static create(content: string): Memo {
        const memo = new Memo()
        memo.content = content
        return memo
    }
}


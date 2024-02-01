import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from 'typeorm'

@Entity()
export class Report {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    summaryContent: string

    public static create(summaryContent: string): Report {
        const report = new Report()
        report.summaryContent = summaryContent
        return report
    }
}


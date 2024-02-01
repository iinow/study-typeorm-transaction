import { memoRepository, reportRepository } from '~/repository'
import init from './config'
import 'reflect-metadata'
import { AppDataSource } from '~/config/db'
import { Memo, Report } from './entities'

;(async () => {
    await init()
    const memo = await memoRepository.save(Memo.create('Hello, World!1'))
    const report = await reportRepository.save(Report.create('HW2'))

    const memos = await memoRepository.find({
        where: { id: memo.id },
    })
    const reports = await reportRepository.find({
        where: { id: report.id },
    })

    console.table(memos)
    console.table(reports)
    AppDataSource.manager.transaction('READ COMMITTED', async manager => {
        
    })
})()

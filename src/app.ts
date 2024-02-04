import http from 'axios'
import { memoRepository, reportRepository } from '~/repository'
import { AppDataSource } from '~/config/db'
import { Memo, Report } from './entities'
import init from './config'
import 'reflect-metadata'

async function ignore(fn: () => Promise<void>) {
    try {
        await fn()
    } catch (e) {
        console.error(e)
    }
}

;(async () => {
    await init()
    
    await ignore(async () => {
        const { memo, report } = await AppDataSource.transaction('REPEATABLE READ', async manager => {
            const memo = await manager.save(Memo.create('Hello, World!1'))
            const report = await manager.save(Report.create('HW2'))
           
            await http.post('http://localhost:3001/posts', {
                title: 'haha',
                author: '이건...'
            })

            await http.post('http://localhost:3001/comments1', {
                title: 'haha',
                author: '이건...'
            })

            if (true) {
                throw new Error('Error')
            } 
    
            return { memo, report }
        })
    })
    
    const memos = await memoRepository.find()
    const reports = await reportRepository.find()

    
    console.table(memos)
    console.table(reports)
})()

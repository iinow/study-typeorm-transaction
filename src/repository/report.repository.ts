import { AppDataSource } from '~/config/db'
import { Report } from '~/entities/report'

export const reportRepository = AppDataSource.getRepository(Report)
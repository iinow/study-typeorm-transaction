import { AppDataSource } from '~/config/db'
import { Memo } from '~/entities/memo'

export const memoRepository = AppDataSource.getRepository(Memo)
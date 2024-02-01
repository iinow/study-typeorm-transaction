import { AppDataSource } from './db'

export { AppDataSource } from './db'

export default async function() {
    const datasource = await AppDataSource.initialize()
}
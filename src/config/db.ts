import { DataSource } from 'typeorm'
import { getEntities } from '~/entities'
import 'dotenv/config'

export const AppDataSource = new DataSource({
    type: 'mysql',
    host: process.env['DATASOURCE_HOST'],
    port: Number.parseInt(process.env['DATASOURCE_PORT']!),
    username: process.env['DATASOURCE_USERNAME'],
    password: process.env['DATASOURCE_PASSWORD'],
    database: process.env['DATASOURCE_DATABASE'],
    synchronize: true,
    logging: true,
    entities: getEntities(),
})

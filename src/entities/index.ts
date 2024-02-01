import { Memo } from './memo'
import { Report } from './report'

export { Memo, Report }

export function getEntities(): any[] {
    return [
        Memo,
        Report,
    ]
}

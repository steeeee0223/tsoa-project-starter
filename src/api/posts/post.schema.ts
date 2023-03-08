import { UUID } from '../../common/schemas'

export interface Post {
    id: number | UUID
    title: string
    description: string
}

import { Controller, Get, Route, Tags, Header, Middlewares } from 'tsoa'

import { UUID } from '../../common/schemas'
import { Post } from './post.schema'

@Route('posts')
@Tags('Posts')
export class PostController extends Controller {
    /**
     * Gets request header 'X-user-id'
     * and sets response header`X-post-id'
     */
    @Get()
    public async getPost(@Header('X-user-id') userId: UUID): Promise<Post> {
        console.log(userId)
        const post: Post = {
            id: 1,
            title: 'NEW POST!',
            description: 'something new...',
        }
        this.setHeader('X-post-id', String(post.id))
        return post
    }
}

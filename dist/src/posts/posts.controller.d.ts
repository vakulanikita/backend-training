import { PostsService } from './posts.service';
import { Post as PostEntity } from 'src/entity/post.entity';
export declare class PostsController {
    private postsService;
    constructor(postsService: PostsService);
    getAllPosts(): Promise<PostEntity[]>;
    createPost(post: PostEntity): Promise<import("typeorm").InsertResult>;
    getOnePost(id: string): Promise<PostEntity>;
    updatePost(id: string, post: PostEntity): Promise<PostEntity>;
    deletePost(id: string): Promise<import("typeorm").DeleteResult>;
}

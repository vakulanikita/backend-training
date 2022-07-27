import { Post } from 'src/entity/post.entity';
import { DeleteResult, InsertResult, Repository } from 'typeorm';
export declare class PostsService {
    private postsRepository;
    constructor(postsRepository: Repository<Post>);
    getPosts(): Promise<Post[]>;
    addPost(post: Post): Promise<InsertResult>;
    findOne(id: number): Promise<Post>;
    update(id: number, post: Post): Promise<Post>;
    delete(id: number): Promise<DeleteResult>;
}

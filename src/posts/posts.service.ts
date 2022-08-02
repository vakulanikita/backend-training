import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { Post } from 'src/entity/post.entity';
import { DeleteResult, InsertResult, Repository } from 'typeorm';

@Injectable()
export class PostsService {
  constructor(
    @Inject('POSTS_REPOSITORY')
    private postsRepository: Repository<Post>,
  ) {}

  async getPosts(): Promise<Post[]> {
    return this.postsRepository.find();
  }

  async addPost(post: Post): Promise<InsertResult> {
    return this.postsRepository.insert(post);
  }

  async findOne(id: number): Promise<Post> {
    return this.postsRepository.findOne({
      where: {
        id,
      },
    });
  }

  async chromeSuggestions(q: string): Promise<string> {
    return JSON.stringify([
      q,
      [q + ' speed test', q + ' steam', q + 'skyscanner', 'stranger things', 'spotify', 'soundcloud', 'slack', 'skype'],
    ]);
  }

  // [
  //   "123",
  //   [
  //     "1234567890 игры",
  //     "123",
  //     "1234567890 игры 123456789012345678901234567890 0033333",
  //     "12345",
  //     "1234567890",
  //     "1234",
  //     "1234567890 игры 1234567890 1234567890 1234567890",
  //     "1234567890qwertyuiop[]",
  //     "1234567890 игры 33",
  //     "123456789",
  //   ],
  // ];

  async update(id: number, post: Post): Promise<Post> {
    const postToUpdate = await this.findOne(id);
    if (postToUpdate === undefined) {
      throw new NotFoundException();
    }
    await this.postsRepository.update(id, post);
    return this.findOne(id);
  }

  async delete(id: number): Promise<DeleteResult> {
    const postToUpdate = await this.findOne(id);
    if (postToUpdate === undefined) {
      throw new NotFoundException();
    }
    return this.postsRepository.delete(id);
  }
}

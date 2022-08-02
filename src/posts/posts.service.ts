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
      ['speed test', 'steam', 'skyscanner', 'stranger things', 'spotify', 'soundcloud', 'slack', 'skype'],
      ['', '', '', '', '', '', '', ''],
      [],
      {
        'google:clientdata': { bpc: false, tlw: false },
        'google:suggestrelevance': [601, 600, 555, 554, 553, 552, 551, 550],
        'google:suggestsubtypes': [[512], [512], [512], [512], [512], [512], [512], [512]],
        'google:suggesttype': ['QUERY', 'QUERY', 'QUERY', 'QUERY', 'QUERY', 'QUERY', 'QUERY', 'QUERY'],
        'google:verbatimrelevance': 1300,
      },
    ]);
  }

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

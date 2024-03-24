import { BLOG_INFO_DICT, BLOG_INFO_LIST } from "../general_info";
import { BlogIndexSingleton } from "../singleton/blog";

export class BlogRepository {
  static getTagsList(): string[] {
    const tmp: Record<string, boolean> = {};
    Object.values(BLOG_INFO_DICT).forEach(blog => {
      blog.tags?.forEach(tag => tmp[tag] = true)
    })

    return Object.keys(tmp);
  }

  static getIdsFromTags(tags: string[]): string[] {
    const blogIndex = BlogIndexSingleton.get();

    if (tags.length == 0) return blogIndex[Symbol.for('all') as any];

    const tmp: Record<string, boolean> = {};
    tags.forEach(tag => {
      blogIndex[tag].forEach(blogId => tmp[blogId] = true);
    })

    return Object.keys(tmp).sort((a, b) => {
      if (BLOG_INFO_DICT[a].date < BLOG_INFO_DICT[b].date) return 1;
      else if (BLOG_INFO_DICT[a].date > BLOG_INFO_DICT[b].date) return -1;
      else return 0;
    });
  }
}

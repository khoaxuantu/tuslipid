import { BLOG_INFO_DICT, BLOG_INFO_LIST } from "../general_info";

type BlogIndex = Record<string, string[]>;

export class BlogIndexSingleton {
  static get() {
    if (!this.instance) this.instance = this.indexing();
    return this.instance;
  }

  private static instance: BlogIndex;

  private constructor() {}

  private static indexing(): BlogIndex {
    this.sortBlogInfoList();

    const tmp: BlogIndex = {
      [Symbol.for("all")]: BLOG_INFO_LIST.map(info => info.dictKey),
    };

    BLOG_INFO_LIST.forEach(entry => {
      BLOG_INFO_DICT[entry.dictKey].tags?.forEach(tag => {
        if (!Object.hasOwn(tmp, tag)) {
          tmp[tag] = [];
        }
        tmp[tag].push(entry.dictKey as string)
      });
    })

    return tmp;
  }

  private static sortBlogInfoList() {
    BLOG_INFO_LIST.sort((a, b) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      if (dateA < dateB) return 1;
      else if (dateA > dateB) return -1;
      else return 0;
    });
  }
}

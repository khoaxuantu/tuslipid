import { blogInfoDict } from "../../lib/general_info";

export function BlogsPageHeaderGrp() {
    return (
      <div className='header-grp'>
        <div className='header-txt-blog'>
          <b>Tus's Blogs</b>
        </div>
        <div className='body-txt mt-2'>
          Some notes, some ideas, some opinions
        </div>
        <hr />
      </div>
    );
}

export function SingleBlogPageHeaderGrp(props: {id: string}) {
    return (
      <div className='header-grp'>
        <div className='header-txt-blog'>
          <b>{blogInfoDict[props.id].title}</b>
        </div>
      </div>
    );
}
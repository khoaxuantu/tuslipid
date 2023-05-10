import { blogInfoDict } from "../../lib/general_info";

export function BlogsPageHeaderGrp() {
    return (
      <div className='header-grp'>
        <div className='header-txt'>
          <b>Blogs</b>
        </div>
        <div className='description-txt mt-2'>
          Some notes, some ideas, some opinions
        </div>
        <hr />
      </div>
    );
}

export function SingleBlogPageHeaderGrp(props: {id: string}) {
    return (
      <div className='header-grp'>
        <div className='header-txt'>
          <b>{blogInfoDict[props.id].title}</b>
        </div>
      </div>
    );
}
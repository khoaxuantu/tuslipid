import { TagContext } from "@/lib/provider/tag.provider";
import { BlogRepository } from "@/lib/repository/blog";
import { useContext } from "react";
import "./tag.scss";

export function Tags() {
  const tags = BlogRepository.getTagsList();

  return (
    <>
      <h3>Tags</h3>
      <div>
        {tags.map((tag) => {
          return <Button tag={tag} key={tag} />;
        })}
      </div>
    </>
  );
}

function Button(props: { tag: string }) {
  const { tags, add, remove } = useContext(TagContext);
  const isActive = tags.includes(props.tag);
  const handleClick = isActive ? remove : add;

  return (
    <button
      className="tag"
      data-active={isActive}
      onClick={() => handleClick(props.tag)}
    >
      #{props.tag}
    </button>
  );
}

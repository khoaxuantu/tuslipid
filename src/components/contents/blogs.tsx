import { useEffect, useState } from "react";
import Card from "../../lib/factory/cardBase";
import { IBlogCardProps } from "../../lib/factory/cardBase";


function Blogs() {
    const blogsNum: number = 4;
    const maxBlogs: number = 10;
    const [startId, setStartId] = useState(0);
    const [blogs, setBlogs] : [any, any] = useState([]);

    console.log(blogs)

    // Fetch a number of blogs 
    useEffect(() => {
        const fetchData = async () => {
            const fetchAPI = await fetch(`/blogs/${startId}`);
            const data = await fetchAPI.json();
            if (!ignore) {
                const newBlogs = [...blogs, ...data];
                setBlogs(newBlogs);
            }
        }

        let ignore = false;
        if (startId < maxBlogs) fetchData();

        return () => {
            ignore = true;
        };
    }, [startId]);

    function handleClick() {
        if (startId + blogsNum < maxBlogs) setStartId(id => id + blogsNum);
    }

    return (
        <div>
            <button onClick={handleClick}>Bla</button>
        </div>
    );
}

export default Blogs;
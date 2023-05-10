import { useEffect, useState } from "react";
import Card from "../../lib/factory/cardBase";
import { blogInfoDict } from "../../lib/general_info";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight/lib";
import rehypeRaw from "rehype-raw";
import "../../css/markdown.css";

export function BlogsList(props: {blogInfoList: { dictKey: string; date: string; }[]}) {
    /**
     * Implement infinite scrolling for blogs
     * - blogsNum: The number of blogs for each fetching
     */
    const blogsNum: number = 4;
    const [startId, setStartId] = useState(0);
    const [hasMore, setHasMore] = useState(true);
    const [blogs, setBlogs] : [{ dictKey: string; date: string; }[], any] = useState([]);

    useEffect(() => {
        function fetchBlogs(startId: number) {
            const newBlogs = [];
            const nextStartId = startId + blogsNum;
            if (nextStartId >= props.blogInfoList.length) setHasMore(!hasMore);
    
            for (let i = startId; i < nextStartId && i < props.blogInfoList.length; i++) {
                newBlogs.push(props.blogInfoList[i]);
            }
            setBlogs([...blogs, ...newBlogs]);
        }

        fetchBlogs(startId);
    }, [startId]);
    
    useEffect(() => {
        function onScroll() {
            const scrollTop = document.documentElement.scrollTop;
            const scrollHeight = document.documentElement.scrollHeight;
            const clientHeight = document.documentElement.clientHeight;
    
            if (scrollTop + clientHeight >= scrollHeight && hasMore) {
                setStartId(startId => startId + blogsNum);
            }
        }

        window.addEventListener('scroll', onScroll)
        return () => window.removeEventListener('scroll', onScroll)
    }, [blogs]);

    return (
        <>
            {blogs.map((blog, index) => {
                return <Card key={index} {...blogInfoDict[blog.dictKey]} />;
            })}
        </>
    );
}

export function SingleBlog(props: {id: string}) {
    const blogInfo = blogInfoDict[props.id];
    const [text, setText] = useState('');
    const mdWrapper = document.getElementsByClassName("single-blog-wrapper")[0];
    
    useEffect(() => {
        import(`../../markdown/${blogInfo.file}`)
            .then(res => {
                fetch(res.default)
                .then(res => res.text())
                .then(txt => setText(txt))
                .catch(err => console.log(err));
            })
            .catch(err => console.log(err));
        }, [])
    
    /**
     * Due to the delay of ReactMarkdown's render, an useEffect is needed
     * to detect the change of the blogWrapper
     * 
     * If the blogWrapper's childNodes is not empty, set its height back to auto
     * (initially the height is constant pixels)
     */
    useEffect(() => {
        const blogWrapper = document.getElementsByClassName("single-blog-wrapper")[0] as HTMLElement;
        if (blogWrapper.childNodes.length !== 0) blogWrapper.style.height = "auto";
    }, [mdWrapper]);
    
    return (
        <>
            <ReactMarkdown
                children={text}
                remarkPlugins={[remarkGfm]}
                rehypePlugins={[rehypeHighlight, rehypeRaw]}
            />
        </>
    );
}
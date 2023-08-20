import { BlogsPageHeaderGrp } from "./header";
import { BlogsContent } from "./contents";
import { useEffect } from "react";

export default function BlogsPage() {

    useEffect(() => {
        const container = document.getElementsByClassName('container')[0] as HTMLElement;
        container.classList.add('transition-page');
    }, [])

    return (
        <>
            <BlogsPageHeaderGrp />
            <BlogsContent />
        </>
    );
}

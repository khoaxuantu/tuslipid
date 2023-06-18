import { Outlet } from "react-router-dom";
import { motion } from "framer-motion";
import Copyright from "../copyright";

function BlogLayout() {
    return(
        <motion.div
            initial={{ transform: "translate3d(0, 0, 0)" }}
            transition={{ duration: 0.5 }}
            exit={{ 
                opacity: 0, 
                transform: "translate3d(0, -5%, 0)" 
            }}
            className="container page-wrapper transition-page">
            <Outlet />
            <Copyright copyright_class="page-copyright pb-3" />
        </motion.div>
    );
}

export default BlogLayout;
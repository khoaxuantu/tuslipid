import { motion as m } from "framer-motion";
import GuestbookHeader from "./header";
import Copyright from "../copyright";
import GuestbookBody from "./body";


export default function GuestbookPage() {
    return(
        <m.div
            initial={{ transform: "translate3d(0, 0, 0)" }}
            transition={{ duration: 0.5 }}
            exit={{ 
                opacity: 0,
                transform: "translate3d(0, -5%, 0)" 
            }} 
            className="container page-wrapper transition-page">
            <GuestbookHeader />
            <GuestbookBody />
            <Copyright copyright_class="page-copyright pb-3" />
        </m.div>
    );
}
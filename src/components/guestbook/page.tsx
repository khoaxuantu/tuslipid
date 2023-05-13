import { motion as m } from "framer-motion";
import GuestbookHeader from "./header";
import Copyright from "../copyright";
import GuestbookBody from "./body";


export default function GuestbookPage() {
    return(
        <m.div
            transition={{ duration: 0.8 }}
            exit={{ opacity: 0 }} 
            className="container page-wrapper transition-page">
            <GuestbookHeader />
            <GuestbookBody />
            <Copyright copyright_class="page-copyright pb-3" />
        </m.div>
    );
}
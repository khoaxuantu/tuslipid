import GuestbookHeader from "./header";
import Copyright from "../copyright";
import GuestbookBody from "./body";


export default function GuestbookPage() {
    return(
        <div className="container page-wrapper transition-page">
            <GuestbookHeader />
            <GuestbookBody />
            <Copyright copyright_class="page-copyright pb-3" />
        </div>
    );
}

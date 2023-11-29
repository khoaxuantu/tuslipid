import GuestbookHeader from "./header";
import Copyright from "../copyright";
import GuestbookBody from "./body";
import { getMetadataURL } from "../../lib/utils/Location";
import { useLocation } from "react-router-dom";
import { Metadata } from "../seo/Metadata";
import CustomHead from "../seo";

const guestbookDescription = "Welcome to my guestbook ~ Leave a message to me here";

export default function GuestbookPage() {
  const url = getMetadataURL(useLocation());

  const metadata: Metadata = {
    title: "Guestbook",
    description: guestbookDescription,
    og: {
      url: url,
      description: guestbookDescription,
    },
    twitter: {
      url: url,
      description: guestbookDescription,
    },
  };

  return (
    <div className="container page-wrapper transition-page">
      <CustomHead metadata={metadata} />
      <GuestbookHeader />
      <GuestbookBody />
      <Copyright copyright_class="page-copyright pb-3" />
    </div>
  );
}

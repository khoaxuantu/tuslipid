import SEO from "../seo";
import { Outlet } from "react-router-dom";
import { Metadata } from "../seo/Metadata";

const defaultTitle = "Tuslipid";
const defaultDescription = "Xuan Khoa Tu Nguyen's personal website";
const defaultSEOImage = process.env.PUBLIC_URL + '/menu_preview.jpg';
const defaultURL = "https://xuankhoatu.com/";

const metadata: Metadata = {
    title: defaultTitle,
    description: defaultDescription,
    author: "Xuan Khoa Tu Nguyen",
    image: defaultSEOImage,
    og: {
      type: 'website',
      image: defaultSEOImage,
      title: 'Tuslipid',
      description: defaultDescription,
      url: defaultURL,
    },
    twitter: {
      card: "summary_large_image",
      url: defaultURL,
      creator: "Xuan Khoa Tu Nguyen",
      title: defaultTitle,
      description: defaultDescription,
      image: defaultSEOImage,
    }
  }

function MainLayout() {
    return (
        <>
            <SEO props={metadata} />
            <Outlet />
        </>
    );
}

export default MainLayout;
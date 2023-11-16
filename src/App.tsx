import { Suspense, lazy } from 'react';
import { Route, Routes, useLocation, Navigate } from 'react-router-dom';
import MainLayout from './components/layouts/main';
import BlogLayout from './components/layouts/blog';
import MenuBuilder from './components/menu/page';
import AboutPage from './components/about/page';
import ProjectsPage from './components/projects/page';
import ScrollToTop from './components/scrollToTop';
import NotFound from './components/404';
import Contact from './components/menu/contact';
import { Metadata } from './components/seo/Metadata';
import SEO from './components/seo';

const Oauth = lazy(() => import('./components/oauth'));
const BlogsPage = lazy(() => import('./components/blogs/listpage'));
const SingleBlogPage = lazy(() => import('./components/blogs/singlepage'));
const GuestbookPage = lazy(() => import(`./components/guestbook/page`));

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

function App() {
  const location = useLocation();

  return (
    <>
      <SEO props={metadata} />
      <ScrollToTop />
      <Routes location={location} key={location.pathname}>
        <Route path='contact' element={<Contact />} />
        <Route path='/' element={<MenuBuilder />} />
        <Route path='/' element={<MainLayout />}>
          <Route path='about' element={<AboutPage />} />
          <Route path='projects' element={<ProjectsPage />} />
          <Route path='blogs' element={<BlogLayout />}>
            <Route index element={<Suspense fallback={<BlogsPageLoader />}><BlogsPage /></Suspense>} />
            <Route path=':blogId' element={<Suspense fallback={<SingleBlogPageLoader />}><SingleBlogPage /></Suspense>} />
          </Route>
          <Route path='guestbook' element={<Suspense><GuestbookPage /></Suspense>} />
          <Route path='oauth' element={<Suspense><Oauth /></Suspense>} />
          <Route path='404' element={<NotFound />} />
        </Route>
        <Route path='*' element={<Navigate to="/404" replace={true} />} />
      </Routes>
    </>
  );
}

function BlogsPageLoader() {
  return (
    <div style={{
      marginTop: 1000
    }}></div>
  );
}

function SingleBlogPageLoader() {
  return (
    <div style={{
      height: 1000
    }}></div>
  );
}

export default App;

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


const Oauth = lazy(() => import('./components/oauth'));
const BlogsPage = lazy(() => import('./components/blogs/listpage'));
const SingleBlogPage = lazy(() => import('./components/blogs/singlepage'));
const GuestbookPage = lazy(() => import(`./components/guestbook/page`));


function App() {
  const location = useLocation();

  return (
    <>
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

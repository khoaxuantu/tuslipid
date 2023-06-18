import { lazy } from 'react';
import { Route, Routes, useLocation, Navigate } from 'react-router-dom';
import MainLayout from './components/layouts/main';
import BlogLayout from './components/layouts/blog';
import MenuBuilder from './components/menu/page';
import AboutPage from './components/about/page';
import ProjectsPage from './components/projects/page';
import { AnimatePresence } from 'framer-motion';
import ScrollToTop from './components/scrollToTop';
import NotFound from './components/404';

const Oauth = lazy(() => import('./components/oauth'));
const BlogsPage = lazy(() => import('./components/blogs/listpage'));
const SingleBlogPage = lazy(() => import('./components/blogs/singlepage'));
const GuestbookPage = lazy(() => import(`./components/guestbook/page`));


function App() {
  const location = useLocation();

  return (
    <AnimatePresence mode='wait'>
      <ScrollToTop />
      <Routes location={location} key={location.pathname}>
        <Route path='/' element={<MainLayout />}>
          <Route index element={<MenuBuilder />} />
          <Route path='about' element={<AboutPage />} />
          <Route path='projects' element={<ProjectsPage />} />
          <Route path='blogs' element={<BlogLayout />}>
            <Route index element={<BlogsPage />} />
            <Route path=':blogId' element={<SingleBlogPage />} />
          </Route>
          <Route path='guestbook' element={<GuestbookPage />} />
          <Route path='oauth' element={<Oauth />} />
          <Route path='404' element={<NotFound />} />
        </Route>
        <Route path='*' element={<Navigate to="/404" replace={true} />} />
      </Routes>
    </AnimatePresence>
  );
}

export default App;

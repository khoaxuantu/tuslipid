import { lazy } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import * as Site from './components/site';
import { AnimatePresence } from 'framer-motion';
import ScrollToTop from './components/scrollToTop';
const Oauth = lazy(() => import('./components/oauth'));


function App() {
  const location = useLocation();

  return (
    <AnimatePresence mode='wait'>
      <ScrollToTop />
      <Routes location={location} key={location.pathname}>
        <Route path='/' element={<Site.Layout />}>
          <Route index element={<Site.MenuBuilder />} />
          <Route path='about' element={<Site.AboutPage />} />
          <Route path='projects' element={<Site.ProjectsPage />} />
          <Route path='blogs' element={<Site.BlogsLayout />}>
            <Route index element={<Site.BlogsPage />} />
            <Route path=':blogId' element={<Site.SingleBlogPage />} />
          </Route>
          <Route path='guestbook' element={<Site.GuestbookPage />} />
          <Route path='oauth' element={<Oauth />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
}

export default App;

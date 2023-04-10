import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import * as Site from './components/site';
import { AnimatePresence } from 'framer-motion';
import { HelmetProvider } from 'react-helmet-async';
import Landing from './components/landing';


function App() {
  const location = useLocation();
  const helmetcontext = {};

  return (
    <HelmetProvider context={helmetcontext}>
      <AnimatePresence mode='wait'>
        <Routes location={location} key={location.pathname}>
          <Route path='/' element={<Site.Layout />}>
            <Route index element={<Site.MenuBuilder />} />
            <Route path='about' element={<Site.AboutPage />} />
            <Route path='projects' element={<Site.ProjectsPage />} />
            <Route path='blogs' element={<Site.BlogPage />} />
          </Route>
        </Routes>
      </AnimatePresence>
      <Landing />
    </HelmetProvider>
  );
}

export default App;

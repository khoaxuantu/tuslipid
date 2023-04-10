import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import * as Site from './components/site';
import { AnimatePresence } from 'framer-motion';


function App() {
  const location = useLocation();

  return (
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
  );
}

export default App;

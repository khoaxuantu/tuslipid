import React from 'react';
import { Route, Routes } from 'react-router-dom';
import * as Site from './components/site';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Site.Layout />}>
        <Route index element={<Site.MenuBuilder />} />
        <Route path='about' element={<Site.AboutPage />} />
        <Route path='projects' element={<Site.ProjectsPage />} />
        <Route path='blogs' element={<Site.BlogPage />} />
      </Route>
    </Routes>
  );
}

export default App;

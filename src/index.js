import React from 'react';
import ReactDOM from 'react-dom';
import './sass/main.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import NotFound from './components/404';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />}>
        <Route path='*' element={<NotFound />} />
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

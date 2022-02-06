import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './sass/main.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import NotFound from './components/404';
import { store } from './store/store';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

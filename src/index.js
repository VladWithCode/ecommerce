import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './sass/main.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import NotFound from './components/404';
import { store } from './store/store';
import Home from './components/Home';
import Products from './components/Products/Products';
import Product from './components/Products/Product';
import Cart from './components/Cart/Cart';
import Privacy from './components/Privacy';
import Terms from './components/Terms';
import Order from './components/Order/Order';
import OrderSearch from './components/Order/OrderSearch';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route index element={<Home />} />
          <Route path='productos' element={<Products />}>
            <Route path='categoria/:ctg' element={<Products />} />
          </Route>
          <Route path='producto/:id' element={<Product />} />
          <Route path='carrito' element={<Cart />} />
          <Route path='orden'>
            <Route index element={<OrderSearch />} />
            <Route path={':id'} element={<Order />} />
          </Route>
          <Route path='politica-de-privacidad' element={<Privacy />} />
          <Route path='terminos-y-condiciones' element={<Terms />} />
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

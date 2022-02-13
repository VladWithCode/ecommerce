import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { SWRConfig } from 'swr';
import Footer from './components/Footer/Footer';
import NavBar from './components/Navbar/NavBar';
import OrderModal from './components/Order/OrderModal';
import Toast from './components/Toast';
import { SWR_REFRESH_INTERVAL } from './config/globals';
import { swrFetcher } from './functions/serverRequest';

export default function App() {
  const { ui } = useSelector(state => state);

  return (
    <SWRConfig
      value={{
        refreshInterval: SWR_REFRESH_INTERVAL,
        fetcher: swrFetcher,
        errorRetryCount: 5,
      }}>
      <div className='App'>
        <NavBar />
        <Outlet />
        <Footer />

        {ui.toastActive && <Toast />}
        {ui.modalActive && <OrderModal orderId={ui.orderId} />}
      </div>
    </SWRConfig>
  );
}

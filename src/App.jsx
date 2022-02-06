import { Outlet } from 'react-router-dom';
import { SWRConfig } from 'swr';
import Footer from './components/Footer/Footer';
import NavBar from './components/Navbar/NavBar';
import { SWR_REFRESH_INTERVAL } from './config/globals';
import { swrFetcher } from './functions/serverRequest';

export default function App() {
  return (
    <SWRConfig
      value={{
        refreshInterval: SWR_REFRESH_INTERVAL,
        fetcher: swrFetcher,
      }}>
      <div className='App'>
        <NavBar />
        <Outlet />
        <Footer />
      </div>
    </SWRConfig>
  );
}

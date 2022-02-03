import { Outlet } from 'react-router-dom';
import { SWRConfig } from 'swr';
import NavBar from './components/NavBar';
import { swrFetcher } from './functions/serverRequest';

export default function App() {
  return (
    <SWRConfig
      value={{
        refreshInterval: 5000,
        fetcher: swrFetcher,
      }}>
      <div className='App'>
        <NavBar />
        <Outlet />
      </div>
    </SWRConfig>
  );
}

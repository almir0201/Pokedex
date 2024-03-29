import { Header } from '../header/Header';
import { Outlet, useLocation } from 'react-router-dom';

export const MainLayout = () => {
  let location = useLocation();
  return (
    <div>
      {location.pathname === '/' ||
      location.pathname === '/pokedex' ||
      location.pathname === '/legendaries' ||
      location.pathname === '/documentation' ? (
        <Header />
      ) : (
        <></>
      )}
      <Outlet />
    </div>
  );
};

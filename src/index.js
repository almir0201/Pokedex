import './index.css';
import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import Documentation from './pages/Documentation';
import Pokedex from './pages/Pokedex';
import Legendaries from './pages/Legendaries';
import ErrorPage from './pages/ErrorPage';
import Root from './pages/Index';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { MainLayout } from './components/layout/MainLayout';

const queryClient = new QueryClient();

export const routesWithoutLayout = { path: '*', element: <ErrorPage />, title: '404' };

export const routes = {
  element: <MainLayout />,
  children: [
    { path: '/', element: <Root />, title: 'Home' },
    { path: 'pokedex', element: <Pokedex />, title: 'Pokedex' },
    { path: 'legendaries', element: <Legendaries />, title: 'Legendaries' },
    { path: 'documentation', element: <Documentation />, title: 'Documentation' }
  ]
};

const router = createBrowserRouter([routes, routesWithoutLayout]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <QueryClientProvider client={queryClient}>
    <RouterProvider router={router} />
  </QueryClientProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import './index.css';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import ComponentsPreview from './pages/ComponentsPreview';
import Documentation from './pages/Documentation';
import Pokedex from './pages/Pokedex';
import Legendaries from './pages/Legendaries';
import Root from './pages/Index';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { MainLayout } from './components/layout/MainLayout';

const queryClient = new QueryClient();

export const routes = {
  element: <MainLayout />,
  children: [
    { path: '/', element: <Root />, title: 'Home' },
    { path: 'preview', element: <ComponentsPreview />, title: 'Components Preview' },
    { path: 'pokedex', element: <Pokedex />, title: 'Pokedex' },
    { path: 'legendaries', element: <Legendaries />, title: 'Legendaries' },
    { path: 'documentation', element: <Documentation />, title: 'Documentation' }
  ]
};

const router = createBrowserRouter([routes]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <QueryClientProvider client={queryClient}>
    <RouterProvider router={router} />
  </QueryClientProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

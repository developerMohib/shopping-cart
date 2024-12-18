import { createRoot } from 'react-dom/client'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

// Create a client
const queryClient = new QueryClient()

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import App from './App.tsx'
import ProductDetails from './component/product/productDetails/ProductDetails.tsx';
import Auth from './pages/auth/Auth.tsx';
import Home from './pages/home/Home.tsx';
import ErrorPage from './pages/errorPage/ErrorPage.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/product-details/:id",
        element: <ProductDetails />
      },
      {
        path: "/sign-in",
        element: <Auth />
      },
      {
        path : "*",
        element : <ErrorPage />,
      }
    ]
  },
]);

createRoot(document.getElementById('root')!).render(
  <>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </>
)

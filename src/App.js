import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";
import {
    useQuery,
    useMutation,
    useQueryClient,
    QueryClient,
    QueryClientProvider,
} from '@tanstack/react-query';
import Home from "./pages/Home/Home";
import Products from "./pages/Products/Products";
import Product from "./pages/Product/Product";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import ProductCart from './pages/ProductCart/ProductCart'

const Layout = () => {
  return (
      <div className={'app'}>
        <Navbar/>
        <Outlet/>
        <Footer/>
      </div>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
        {
            path: '/',
            element: <Home/>
        },
        {
            path: '/products',
            element: <Products/>
        },
        {
            path: '/products/:id',
            element: <Product/>
        },
        {
            path: '/cart',
            element: <ProductCart/>
        },
    ]
  },
]);

const queryClient = new QueryClient()

function App() {
  return (
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
  );
}

export default App;

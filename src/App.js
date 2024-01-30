import 'bootstrap/dist/css/bootstrap.min.css'
import Counter from './components/counter'
import Products from './components/products'
import { createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Dashboard from './components/dashboard';
import Cart from './components/cart';
import RootLayout from './components/RootLayout';

function App() {

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Dashboard />}></Route>
      <Route path="/cart" element={<Cart />}></Route>
    </Route>
  ))
  return (
    <div>
      {/* <Counter /> */}
      {/* <Products /> */}
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;

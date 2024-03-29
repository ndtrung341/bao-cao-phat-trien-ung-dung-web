import './App.css';
import { Navigate, Route, Routes } from 'react-router-dom';

import NotFound from 'components/Common/NotFound';

import Home from 'pages/Home';
import Cart from 'pages/Cart';
import Checkout from 'pages/Checkout';
import Collection from 'pages/Collection';
import ProductDetail from 'pages/ProductDetail';
import Login from 'pages/Login';
import Register from 'pages/Register';
import Verify from 'pages/Verify';
import AdminLayout from 'components/Layouts/AdminLayout';
import PrivateRoute from 'components/Common/PrivateRoute';

import MainLayout from 'components/Layouts/MainLayout';
import AuthLayout from 'components/Layouts/AuthLayout';
import AddEditProduct from 'pages/Admin/AddEditProduct';
import AdminProductList from 'pages/Admin/AdminProductList';
import OrderSuccess from 'pages/OrderSuccess';
import OrderHistory from 'pages/OrderHistory';
import AdminOrderList from 'pages/Admin/AdminOrderList';
import UserManagement from 'pages/Admin/UserManagement';
import ReviewManagement from 'pages/Admin/ReviewManagement';
import CategoryManagement from 'pages/Admin/CategoryManagement';
import PurchaseList from 'pages/Purchase';
import OrderManagement from 'pages/Admin/OrderManagement';

function App() {
   return (
      <Routes>
         {/* ROUTE SHOP */}
         <Route path='/' element={<MainLayout />}>
            <Route path='' element={<Home />} />
            <Route path=':slug' element={<ProductDetail />} />
            {/* product list */}
            <Route path='themes/:slug' element={<Collection />} />
            <Route path='categories/:slug' element={<Collection />} />

            <Route element={<PrivateRoute />}>
               <Route path='cart' element={<Cart />} />
               <Route path='checkout' element={<Checkout />} />
               <Route path='order-success' element={<OrderSuccess />} />
               {/* <Route path='purchase' element={<OrderHistory />} /> */}
               <Route path='purchase' element={<PurchaseList />} />
            </Route>

            <Route path='404' element={<NotFound />} />
         </Route>

         {/* ROUTE ADMIN */}
         <Route element={<PrivateRoute roles={['admin']} />}>
            <Route path='admin' element={<AdminLayout />}>
               <Route path='products'>
                  <Route path='' element={<AdminProductList />} />
                  <Route path=':id' element={<AddEditProduct />} />
                  <Route path='add' element={<AddEditProduct />} />
               </Route>
               {/* <Route path='orders' element={<AdminOrderList />} /> */}
               <Route path='orders' element={<OrderManagement />} />

               <Route path='users' element={<UserManagement />} />
               <Route path='reviews' element={<ReviewManagement />} />
               <Route path='categories' element={<CategoryManagement />} />
            </Route>
         </Route>

         {/* ROUTE AUTH */}
         <Route path='auth'>
            <Route element={<AuthLayout />}>
               <Route path='login' element={<Login />} />
               <Route path='register' element={<Register />} />
            </Route>
            <Route path='verify_email' element={<Verify />} />
            <Route path='forgot' element={null} />
         </Route>

         {/* redirect to 404 page */}
         <Route path='*' element={<Navigate to='404' replace={true} />} />
      </Routes>
   );
}

export default App;

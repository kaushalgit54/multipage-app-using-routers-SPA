import React from "react";
import classes from './App.module.css';
//import all packages and components here
import {createBrowserRouter, createRoutesFromElements, RouterProvider, Route} from 'react-router-dom';
import HomePage from "./Pages/Home";
import ProductPage from "./Pages/Products"; 
import RootLayout from "./Pages/Root";
import ErrorPage from "./Pages/Error";
import ProductDetailPage from "./Pages/ProductDetail";
// const routeDefinitions = createRoutesFromElements(
//  <Route>
//      <Route path="/" element={<HomePage/>}></Route>
//      <Route path="/products" element={<ProductPage/>}></Route>
//  </Route>
// );
// const router = createBrowserRouter(routeDefinitions);

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout/>,
    errorElement: <ErrorPage/>,
    children:[
      {index: true, path: '', element: <HomePage/>},
      {path: 'products', element: <ProductPage/>},
      {path: 'products/:productId', element: <ProductDetailPage/>},
    ],
  },  
]);


function App(){
  return <RouterProvider router={router}/>
};

export default App;
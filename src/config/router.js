import { createBrowserRouter, RouterProvider ,useNavigate ,Outlet, Navigate} from 'react-router-dom';
import { onAuthStateChanged } from "firebase/auth";
import {auth} from './firebase';
import { useState, useEffect } from 'react';

import Header from '../views/Header/Header';
import Showdata from '../views/Cards/cards';
import Register from '../views/Auth/register';
import Login from '../views/Auth/login';
import Postadd from '../views/Adds/add';
import Details from '../views/Detail Page/detailpage';
import Footer from '../views/Footer/footer';
import Glmap from '../components/map';
import MyComponent from '../components/mapApi';

const router = createBrowserRouter([
   
    {
      path: "/",
      element: <Layout />,
      children : [

        {
          path: "/",
          element: <Showdata />,
        },
        {
          path: "/details/:adId",
          element: <Details />,
        },
      ]
    },
  
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/login",
      element: <Login />,
    },
   
    {
      path: "/post",
      element: <Postadd />,
    },
    // {
    //   path: "/map",
    //   element: <Glmap />,
    // },
    {
      path: "/mapapi",
      element: <MyComponent />,
    },
  ]);

   function Layout (){
    const path = window.location.pathname
    const navigate = useNavigate()
const [user , setUser] = useState(null)
const [loading , setLoading] = useState(true)

    useEffect (() => {
        onAuthStateChanged(auth, (user) => {
          setUser(user)
          setLoading(false)
  });
    },[])

    useEffect(() => {
      if(user){
          if( path === '/register' || path === '/login'){
            navigate('/')
          }
      } else {
        
        if( path === '/post'){
          navigate('/login')
        }
      }
    },[path , user])

if (loading) return <div><h1>Loading...</h1></div>

    return <>
    <Header user= {user}/>
    <Outlet/>
    <Footer/>
    </>
   }

  function Router(){

    return  <RouterProvider router={router} />
    
  }

  export default Router
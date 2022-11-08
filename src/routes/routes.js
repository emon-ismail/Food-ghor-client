import { createBrowserRouter } from 'react-router-dom'
import ErrorPage from '../components/ErrorPage'
import Home from '../components/Home'
import Login from '../components/Login'
import Register from '../components/Register'
import Main from '../layout/Main'
// import Wallet from '../components/Wallet'
import Profile from '../components/Profile'
import PrivateRoute from './PrivateRoute'
import Courses from '../components/Courses'

import Faq from '../components/Faq'
import Blog from '../components/Blog'



const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    errorElement: <ErrorPage />,
   
   
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/home',
        element: <Home />,
      },
      
      // {
      //   path: '/checkout/:id',
      //   // element: <Checkout></Checkout>,
      //   loader: ({params})=> fetch(`http://localhost:5000/services/${params.id}`)
      // },



      {
        path:'/faq',
        element:<Faq></Faq>
      },
      {
        path:'/blog',
        element:<Blog></Blog>,
      },
   
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/register',
        element: <Register />,
      },
      {
        path: '/courses',
        element: (
          <PrivateRoute>
           
            <Courses></Courses>
          </PrivateRoute>
        ),
      },
      {
        path: '/profile',
        element: (
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        ),
      },
    ],
  },
])

export default router

import { useRoutes } from 'react-router-dom'
import Products from './pages/Products'
import Login from './pages/Login'
import Register from './pages/Register'
import RegisterLayout from './layouts/Register'

export default function useRouteElements() {
  const routeElements = useRoutes([
    {
      path: '/',
      element: <Products />
    },
    {
      path: '/login',
      element: (
        <RegisterLayout>
          <Login />
        </RegisterLayout>
      )
    },
    {
      path: '/register',
      element: (
        <RegisterLayout>
          <Register />
        </RegisterLayout>
      )
    }
  ])

  return routeElements
}

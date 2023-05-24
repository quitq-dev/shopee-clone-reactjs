import { useRoutes } from 'react-router-dom'
import Main from './layouts/Main'
import RegisterLayout from './layouts/Register'
import Login from './pages/Login'
import Register from './pages/Register'
import Products from './pages/Products'

export default function useRouteElements() {
  const routeElements = useRoutes([
    {
      path: '/',
      element: (
        <Main>
          <Products />
        </Main>
      )
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

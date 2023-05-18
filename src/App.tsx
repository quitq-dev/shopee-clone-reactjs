import './App.css'
import useRouteElements from './useRouteElements'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  const routeElements = useRouteElements()
  return (
    <div className=''>
      <h1>
        {routeElements}
        <ToastContainer />
      </h1>
    </div>
  )
}

export default App

import './App.css'
import useRouteElements from './useRouteElements'

function App() {
  const routeElements = useRouteElements()
  return (
    <div className=''>
      <h1>{routeElements}</h1>
    </div>
  )
}

export default App

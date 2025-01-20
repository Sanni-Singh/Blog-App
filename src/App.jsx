
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import BlogHomePage from './components/BlogHomePage'
import LoginComponent from './components/LoginComponent'

function App() {

  const router = createBrowserRouter([
    {
      path:"/",
      element:<LoginComponent/>
    },
    {
      path:"/blog",
      element:<BlogHomePage/>
    }
  ])
  return (

    <RouterProvider router={router}/>
  )
}

export default App

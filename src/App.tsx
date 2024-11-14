
import { Fragment } from 'react/jsx-runtime'
import './App.css'
import Navbar from './component/navbar/Navbar'
import Footer from './component/footer/Footer'
import { Outlet } from 'react-router-dom'

function App() {

  return (
    <Fragment>
      <Navbar />
      <Outlet />
      <Footer />
    </Fragment>
  )
}

export default App

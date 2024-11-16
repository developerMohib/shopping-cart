
import { Fragment } from 'react/jsx-runtime'
import { Outlet } from 'react-router-dom'
import Navbar from './component/navbar/Navbar'
import Footer from './component/footer/Footer'
import './App.css'

function App() {

  return (
    <Fragment>
      <Navbar />
      <div className='max-w-screen-xl px-5 mx-auto'>
        <Outlet />
      </div>
      <Footer />
    </Fragment>
  )
}

export default App

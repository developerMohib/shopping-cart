
import { Fragment } from 'react/jsx-runtime'
import './App.css'
import Navbar from './component/navbar/Navbar'
import Footer from './component/footer/Footer'
import Home from './pages/home/Home'

function App() {

  return (
    <Fragment>
      <Navbar />
      <div className='max-w-screen-xl px-5 mx-auto'>
        <Home />
      </div>
      <Footer />
    </Fragment>
  )
}

export default App

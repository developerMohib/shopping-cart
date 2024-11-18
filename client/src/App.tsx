
import { Fragment } from 'react/jsx-runtime'
import { Outlet } from 'react-router-dom'
import Navbar from './component/navbar/Navbar'
import Footer from './component/footer/Footer'
import './App.css'
import { useState } from 'react'

function App() {
  const [search, setSearch] = useState<string>("");

  return (
    <Fragment>
      <Navbar setSearch={setSearch} />
      <div className='max-w-screen-xl px-5 mx-auto'>
        <Outlet context={{ search }} />
      </div>
      <Footer />
    </Fragment>
  )
}

export default App

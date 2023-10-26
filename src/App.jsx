
import { Outlet } from 'react-router'
import './App.scss'
import Navigation from './components/Navigation/Navigation'
import Footer from './components/Footer/Footer'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faStar } from '@fortawesome/free-solid-svg-icons';

library.add(faStar);


function App() {

  return (
    <>
    <Navigation />
    <main>
      <Outlet />
    </main>

    <Footer />
    </>
   
  )
}

export default App

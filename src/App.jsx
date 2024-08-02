import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import { Route, Routes } from 'react-router-dom'

import Homepage from './pages/HomePage/HomePage'
import WikiCoffeePage from './pages/WikiCoffeePage/WikiCoffeePage'
import AboutPage from './pages/AboutPage/AboutPage'
import ErrorPage from './pages/ErrorPage/ErrorPage'
import CoffeeSelectorPage from './pages/CoffeeSelectorPage/CoffeeSelectorPage'
import CoffeeDetailsPage from './pages/CoffeeDetailsPage/CoffeeDetailsPage'
import CoffeeLoadingPage from './pages/CoffeeLoadingPage/CoffeeLoadingPage'
import CoffeeResultPage from './pages/CoffeeResultPage/CoffeeResultPage'
import Footer from './components/Footer/Footer'
import Navigation from './components/Navbar/Navigation';
import AdminPage from './pages/Admin/AdminPage';
import AdminCoffeesPage from './pages/Admin/AdminCoffee/AdminCoffeesPage';
import AdminCoffeePotsPage from './pages/Admin/AdminCoffeePots/AdminCoffeePotsPage';



function App() {

  return (

    <div className="d-flex flex-column min-vh-100">

      <Navigation />

      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/coffee-selector' element={<CoffeeSelectorPage />} />
        <Route path='/coffee-loading' element={<CoffeeLoadingPage />} />
        <Route path='/coffee-result' element={<CoffeeResultPage />} />
        <Route path='/coffee/:id' element={<CoffeeDetailsPage />} />
        <Route path='/wiki-coffee' element={<WikiCoffeePage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/admin' element={<AdminPage />} />
        <Route path='/admin-coffees' element={<AdminCoffeesPage />} />
        <Route path='/admin-coffee-pots' element={<AdminCoffeePotsPage />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>

      <Footer />
    </div>

  )
}

export default App
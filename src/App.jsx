import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import { Route, Routes } from 'react-router-dom'

import Homepage from './pages/HomePage/HomePage'
import WikiCoffeePage from './pages/WikiCoffeePage/WikiCoffeePage'
import AboutPage from './pages/AboutPage/AboutPage'
import ErrorPage from './pages/ErrorPage/ErrorPage'
import CoffeeSelectorPage from './pages/CoffeeSelectorPage/CoffeeSelectorPage'
import CoffeeDetails from './pages/CoffeeDetails/CoffeeDetails'
import CoffeeLoadingPage from './pages/CoffeeLoadingPage/CoffeeLoadingPage'
import CoffeeResultPage from './pages/CoffeeResultPage/CoffeeResultPage'
import Footer from './components/Footer/Footer'
import { CardBody, CardFooter, Container, Navbar } from 'react-bootstrap'
import Navigation from './components/Navbar/Navigation';






function App() {

  return (
    <>

      <div className="d-flex flex-column min-vh-100">

        <Navigation />

        <Routes>
          <Route path='/' element={<Homepage />}></Route>
          <Route path='/coffee-selector' element={<CoffeeSelectorPage />}></Route>
          <Route path='/coffee-loading' element={<CoffeeLoadingPage />}></Route>
          <Route path='/coffee-result' element={<CoffeeResultPage />}></Route>
          <Route path='/coffee/:id' element={<CoffeeDetails />}></Route>
          <Route path='/wiki-coffee' element={<WikiCoffeePage />}></Route>
          <Route path='/about' element={<AboutPage />}></Route>
          <Route path='*' element={<ErrorPage />}></Route>
        </Routes>

        <CardFooter>
          <Footer />
        </CardFooter>
      </div>

    </>
  )
}

export default App

{/* 
                  src/
          ├── components/
          │   ├── Header
          │   ├── Navbar
          │   ├── Footer
          │   ├── Hero
          │   ├── CoffeeSelector/
          │   │   ├── CoffeeSelector.jsx
          │   │   ├── CoffeeForm.jsx
          │   │   ├── CoffeeResults.jsx
          │   ├── WikiCoffee/
          │   │   ├── CoffeeCollection.jsx
          │   │   ├── TipsSection.jsx
          │   │   ├── PreparationMethods.jsx
          │   │   ├── VideoGallery.jsx
          │   │   ├── WikiCoffee.jsx
          │   ├── CoffeePot/
          │   │   ├── CoffeePotCard.jsx
          │   │   ├── CoffeePotList.jsx
          │   │   ├── AddNewCoffeePotForm.jsx
          │   │   ├── EditCoffeePotForm.jsx
          │   │   ├── DeleteCoffeePotForm.jsx
          │   ├── Coffee/
          │   │   ├── CoffeeCard.jsx
          │   │   ├── CoffeeList.jsx
          │   │   ├── AddNewCoffeeForm.jsx
          │   │   ├── EditCoffeeForm.jsx
          │   │   ├── DeleteCoffeeForm.jsx
          │   ├──  shared/
          │   │   ├── Button.jsx
          │   │   ├── Select.jsx
          │   │   ├── Input.jsx
          │   │   ├── Carousel.jsx
          │   │   ├── Placeholders.jsx
          │   │   ├── Spinner.jsx
          │   │   ├── WarningDeleteAdvice.jsx
          │
          ├── pages/
          │   ├── HomePage.jsx
          │   ├── CoffeeSelectorPage.jsx
          │   ├── CoffeeDetails.jsx
          │   ├── WikiCoffeePage.jsx
          │   ├── AboutPage.jsx
          │   ├── ErrorPage.jsx
          ├── assets/
          │   ├── images/
          │   ├── styles/
          │       ├── main.css
          │       ├── CoffeeSelector.css
          │       ├── WikiCoffee.css
          ├── App.jsx
          ├── index.jsx
      */}
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import { Route, Routes } from 'react-router-dom'

import Homepage from './Pages/HomePage/HomePage'
import WikiCoffeePage from './Pages/WikiCoffeePage/WikiCoffeePage'
import AboutPage from './Pages/AboutPage/AboutPage'
import ErrorPage from './Pages/ErrorPage/ErrorPage'
import CoffeeSelectorPage from './Pages/CoffeeSelectorPage/CoffeeSelectorPage'
import CoffeeDetails from './Pages/CoffeeDetails/CoffeeDetails'
import CoffeeLoadingPage from './Pages/CoffeeLoadingPage/CoffeeLoadingPage'
import CoffeeResultPage from './Pages/CoffeeResultPage/CoffeeResultPage'
import Footer from './components/Footer/Footer'
import { CardBody, CardFooter, Container, Navbar } from 'react-bootstrap'






function App() {

  return (
    <>
      <Navbar>
        Hola soy navbar
      </Navbar>

      <Container className="flex-grow-1 mt-5 pt-3">
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
      </Container>
      <CardFooter>
        <Footer />
      </CardFooter>
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
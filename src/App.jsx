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
import { CardFooter } from 'react-bootstrap'
import Navigation from './components/Navbar/Navigation';
import AdminPage from './pages/Admin/AdminPage';
import AdminCoffeesPage from './pages/Admin/AdminCoffee/AdminCoffeesPage';
import AdminCoffeePotsPage from './pages/Admin/AdminCoffeePots/AdminCoffeePotsPage';



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
          <Route path='/coffee/:id' element={<CoffeeDetailsPage />}></Route>
          <Route path='/wiki-coffee' element={<WikiCoffeePage />}></Route>
          <Route path='/about' element={<AboutPage />}></Route>
          <Route path='/admin' element={<AdminPage />}></Route>
          <Route path='/admin-coffees' element={<AdminCoffeesPage />}></Route>
          <Route path='/admin-coffee-pots' element={<AdminCoffeePotsPage />}></Route>
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
          │   ├── CoffeePots/
          │   │   ├── CoffeePotCard.jsx
          │   │   ├── CoffeePotsList.jsx
          │   │   ├── AddNewCoffeePotForm.jsx
          │   │   ├── EditCoffeePotForm.jsx
          │   │   ├── DeleteCoffeePotForm.jsx
          │   │   ├── CoffeePotForm.jsx
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
          │   ├── Admin/
          │   │   ├── AdminCoffee.jsx
          │   │   ├── AdminCoffeePots.jsx
          │   │   ├── AdminPage.jsx
          │   ├── CoffeeSelectorPage.jsx
          │   ├── CoffeeLoadingPage.jsx
          │   ├── CoffeeResultPage.jsx
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
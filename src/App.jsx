import { Route, Routes } from 'react-router-dom'
import './App.css'
import Homepage from './Pages/HomePage/HomePage'
import WikiCoffeePage from './Pages/WikiCoffeePage/WikiCoffeePage'
import AboutPage from './Pages/AboutPage/AboutPage'
import ErrorPage from './Pages/ErrorPage/ErrorPage'
import CoffeeSelectorPage from './Pages/CoffeeSelectorPage/CoffeeSelectorPage'
import CoffeeDetails from './Pages/CoffeeDetails/CoffeeDetails'
import Navigation from './components/Navbar/Navigation'
import 'bootstrap/dist/css/bootstrap.min.css';




function App() {

  return (
    <>
      <h1>WebApp</h1>

      <Navigation />

      <Routes>
        <Route path='/' element={<Homepage />}></Route>
        <Route path='/coffee-selector' element={<CoffeeSelectorPage />}></Route>
        <Route path='/coffee/:id' element={<CoffeeDetails />}></Route>
        <Route path='/wiki-coffee' element={<WikiCoffeePage />}></Route>
        <Route path='/about' element={<AboutPage />}></Route>
        <Route path='*' element={<ErrorPage />}></Route>
      </Routes>
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
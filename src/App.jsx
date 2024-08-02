import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import AppRoutes from './routes/AppRoutes';
import Footer from './components/Footer/Footer'
import { CardFooter } from 'react-bootstrap'
import Navigation from './components/Navbar/Navigation';

function App() {

  return (
    <>

      <div className="d-flex flex-column min-vh-100">

        <Navigation />

        <AppRoutes />

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
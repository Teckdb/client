import Homepage from '../pages/HomePage/HomePage'
import WikiCoffeePage from '../pages/WikiCoffeePage/WikiCoffeePage'
import AboutPage from '../pages/AboutPage/AboutPage'
import ErrorPage from '../pages/ErrorPage/ErrorPage'
import CoffeeSelectorPage from '../pages/CoffeeSelectorPage/CoffeeSelectorPage'
import CoffeeDetailsPage from '../pages/CoffeeDetailsPage/CoffeeDetailsPage'
import CoffeeResultPage from '../pages/CoffeeResultPage/CoffeeResultPage'

import AdminPage from '../pages/Admin/AdminPage';
import AdminCoffeesPage from '../pages/Admin/AdminCoffee/AdminCoffeesPage';
import NewCoffeePotsPage from '../pages/Admin/AdminCoffeePots/NewCoffeePotsPage';
import EditCoffeePotForm from '../pages/Admin/AdminCoffeePots/EditCoffeePotPage';


import { Route, Routes, useLocation } from "react-router-dom"
import EditCoffeePage from '../pages/Admin/AdminCoffee/EditCoffeePage'
import TransitionGroup from 'react-transition-group/Transition'


const AppRoutes = () => {



    return (


        <Routes >
            <Route path='/' element={<Homepage />} />
            <Route path='/coffee-selector' element={<CoffeeSelectorPage />} />
            <Route path='/coffee-selector/coffee-result/:potId' element={<CoffeeResultPage />} />
            <Route path='/coffee/:id' element={<CoffeeDetailsPage />} />
            <Route path='/wiki-coffee' element={<WikiCoffeePage />} />
            <Route path='/about' element={<AboutPage />} />
            <Route path='/admin' element={<AdminPage />} />
            <Route path='/admin-coffees' element={<AdminCoffeesPage />} />
            <Route path='/admin-coffees/edit/:id' element={<EditCoffeePage />}> </Route>
            <Route path='/admin-coffee-pots/new' element={<NewCoffeePotsPage />} />
            <Route path='/admin-coffee-pots/edit/:id' element={<EditCoffeePotForm />} />
            <Route path='*' element={<ErrorPage />} />
        </Routes>


    )
}

export default AppRoutes
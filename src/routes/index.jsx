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


import { Route, Routes } from "react-router-dom"
import EditCoffeePage from '../pages/Admin/AdminCoffee/EditCoffeePage'

const AppRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Homepage />}></Route>
            <Route path='/coffee-selector' element={<CoffeeSelectorPage />}></Route>
            <Route path='/coffee-selector/coffee-result/:potId' element={<CoffeeResultPage />}></Route>
            <Route path='/coffee/:id' element={<CoffeeDetailsPage />}></Route>
            <Route path='/wiki-coffee' element={<WikiCoffeePage />}></Route>
            <Route path='/about' element={<AboutPage />}></Route>
            <Route path='/admin' element={<AdminPage />}></Route>
            <Route path='/admin-coffees' element={<AdminCoffeesPage />}></Route>
            <Route path='/admin-coffees/edit/:id' element={<EditCoffeePage />}> </Route>
            <Route path='/admin-coffee-pots/new' element={<NewCoffeePotsPage />}></Route>
            <Route path='/admin-coffee-pots/edit/:id' element={<EditCoffeePotForm />}></Route>
            <Route path='*' element={<ErrorPage />}></Route>
        </Routes>
    )
}

export default AppRoutes
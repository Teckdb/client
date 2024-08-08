import Homepage from '../pages/HomePage/HomePage'
import WikiCoffeePage from '../pages/WikiCoffeePage/WikiCoffeePage'
import AboutPage from '../pages/AboutPage/AboutPage'
import ErrorPage from '../pages/ErrorPage/ErrorPage'
import CoffeeSelectorPage from '../pages/CoffeeSelectorPage/CoffeeSelectorPage'
import CoffeeDetailsPage from '../pages/CoffeeDetailsPage/CoffeeDetailsPage'
import CoffeeResultPage from '../pages/CoffeeResultPage/CoffeeResultPage'
import AdminPage from '../pages/Admin/AdminPage'
import AdminEditList from '../pages/Admin/AdminEditList'
import { Route, Routes } from "react-router-dom"

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
            <Route path='/admin-edit-list' element={<AdminEditList />} />
            <Route path='*' element={<ErrorPage />} />
        </Routes>
    )
}

export default AppRoutes
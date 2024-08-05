import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import AppRoutes from './routes';
import Footer from './components/Footer'
import Navigation from './components/Navbar/Navigation';


function App() {

  return (

    <div className="d-flex flex-column min-vh-100">

      <Navigation />

      <AppRoutes />

      <Footer />

    </div>

  )
}

export default App
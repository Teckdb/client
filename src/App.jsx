import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import AppRoutes from './routes';
import Layout from './components/Layout';

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Layout>
        <AppRoutes />
      </Layout>
    </div>
  )
}

export default App
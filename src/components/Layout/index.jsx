import Footer from "../Footer/Footer"
import NavBar from "../NavBar/NavBar"

export default function Layout({ children }) {
    return (
        <div>
            <NavBar />
            {children}
            <Footer />
        </div>
    )
}
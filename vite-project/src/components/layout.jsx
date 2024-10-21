import Footer from "./footer"
import Header from "./header"
import { Outlet } from "react-router"

function Layout() {
    return (
        <div>
            <Header />
            <div className="min-h-[400px]">
                <Outlet />
            </div>
            <Footer/>
        </div>
    )
}

export default Layout
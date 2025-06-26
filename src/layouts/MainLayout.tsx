import { Outlet } from "react-router-dom";
import Navbar from "@/components/NavBar";
import Footer from "@/components/Footer"
import "keen-slider/keen-slider.min.css"

export default function MainLayout() {
    return (

        <>
            <Navbar />

            <main className="min-h-screen w-screen montserrat">
                <Outlet />
            </main>

            <Footer/>
        </>
    )
}
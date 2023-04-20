import { Navigate, Route, Routes, Link } from "react-router-dom"
import { AboutPage } from "./AboutPage"
import { HomePage } from "./HomePage"
import { LoginPage } from "./LoginPage"
import { NavBar } from "./NavBar"

export const MainApp = () => {

    const links = [
        { name: 'Home', link: '/home' },
        { name: 'About', link: '/about' },
        { name: 'Login', link: '/login' }
    ]

    return (
        <>
            <h1>MainApp</h1>
            <NavBar links={links} />
            <hr />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="about" element={<AboutPage />} />
                <Route path="login" element={<LoginPage />} />

                {/* <Route path="/*" element={<HomePage />} /> */}

                <Route path="/*" element={<Navigate to='/' />} />

            </Routes>
        </>
    )
}

// Dependencies
import React from 'react'
import { Outlet } from 'react-router-dom'
// Components
import Nav from '../Nav/Nav'
import Footer from '../Footer/Footer'

const Layout = () => {
    return (
        <React.Fragment>
            <Nav />
            <Outlet />
            <Footer />
        </React.Fragment>
    )
}

export default Layout
import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';
import '../style/Layout.css'
import Home from './pages/Home';
const Layout = () => {
    return (
        <div>
            <Navbar/>
            <main className='main-content'>
                <Outlet/>
                <Home/>
            </main>
            <Footer/>
        </div>
    );
}

export default Layout;

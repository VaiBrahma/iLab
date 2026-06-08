import React from 'react'
import { Outlet } from 'react-router-dom'
import Headers from '../header/header'
import Footer from '../footer/footer'

import './layout.css'

export function Layout() {
    return (
        <>
        <div className='layout'>
            <div className='layoutLeft'>
                <Headers/>
            </div>
            <div className="layoutMain">
            <Outlet/>
            </div>
            <div className="layoutBottom">
            <Footer/>
            </div>

        </div>
        </>
    )
}
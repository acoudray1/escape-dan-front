import React from 'react'
import { Routes, Route } from 'react-router-dom'
import HomeContainer from '../pages/Home'
import DashboardContainer from '../pages/Dashboard'
import {NotFound} from './NotFound'
import {ROOT, DASHBOARD} from "./Constants"

export const RouterConfig = () => {
    return (
        <Routes>
            <Route exact path={ROOT} element={<HomeContainer/>}/>
            <Route exact path={DASHBOARD} element={<DashboardContainer/>}/>

            {/*<Route exact path={ROOT}>
                <Home/>    
            </Route>
            <Route exact path={DASHBOARD}>
                <Dashboard/>
            </Route>*/}

            {/* 404 page not found will redirect to Home Screen*/}
            <Route path="*">
                <NotFound/>
            </Route>
        </Routes>
    )
}

export default RouterConfig;
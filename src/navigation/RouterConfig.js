import React from 'react'
import { Routes, Route } from 'react-router-dom'
import HomeContainer from '../pages/Home'
import DashboardContainer from '../pages/Dashboard'
import {NotFound} from './NotFound'
import {ROOT, DASHBOARD} from "./Constants"

export const RouterConfig = () => {
    return (
        <Routes>
            <Route path={ROOT} element={<HomeContainer/>}/>
            <Route path={DASHBOARD} element={<DashboardContainer/>}/>

            {/* 404 page not found will redirect to Home Screen*/}
            <Route path="*" element={<NotFound/>}/>
        </Routes>
    )
}

export default RouterConfig;
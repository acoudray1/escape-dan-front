import React from 'react'
import { Typography, Button } from '@mui/material'
import { ROOT } from '../../navigation/Constants'
import { useNavigate } from "react-router-dom";

export const DashboardView = () => {
    let navigate = useNavigate();

    return (
        <div>
            <Typography variant="h2">Dashboard Page</Typography>
            <Button variant="contained" onClick={()=>navigate(ROOT)}>Dashboard</Button>
        </div>
    )
}

export default DashboardView;
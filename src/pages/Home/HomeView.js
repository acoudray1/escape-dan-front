import React from 'react'
import PropTypes from 'prop-types'
import { Typography, Button } from '@mui/material'
import { DASHBOARD } from '../../navigation/Constants'
import { useNavigate } from "react-router-dom";

export const HomeView = props => {
    let navigate = useNavigate();

    return (
        <div>
            <Typography variant="h2">HomeView {props.title}</Typography>
            <Button variant="contained" onClick={()=>navigate(DASHBOARD)}>Dashboard</Button>
        </div>
    )
}

HomeView.propTypes = {
    title: PropTypes.string.isRequired
}

export default HomeView;

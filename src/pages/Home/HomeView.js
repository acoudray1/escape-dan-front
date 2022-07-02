import React from 'react'
import PropTypes from 'prop-types'
import { Typography, Button } from '@mui/material'
import { DASHBOARD, ROOT } from '../../navigation/Constants'
import { useNavigate } from 'react-router-dom'

export const HomeView = props => {
    const history = useNavigate();

    const goTo = (path) => {
        history.push(path || ROOT);
    }

    return (
        <div>
            <Typography variant="h2">HomeView {props.title}</Typography>
            <Button variant="contained" onClick={()=>goTo(DASHBOARD)}>Dashboard</Button>
        </div>
    )
}

HomeView.propTypes = {
    title: PropTypes.string.isRequired
}

export default HomeView;

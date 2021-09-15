import React from 'react';
import ROOT from '../../navigation/CONSTANTS'
import { Typography } from '@material-ui/core';
import { Link } from 'react-router-dom'
import { useAuth } from '../../navigation/Auth/ProvideAuth'

export const AuthorizedPage1 = () => {
    const { user } = useAuth()
    return (
        <div>
        <Typography variant="h4" gutterBottom>
            AuthorizedPage1
        </Typography>
        <Typography variant="subtitle1" align="center">
            You are logged in as { user.name }
        </Typography>
        <Typography variant="body2" align="center">
            <Link to={ROOT}>Home</Link>
        </Typography>
        </div>
    )
}
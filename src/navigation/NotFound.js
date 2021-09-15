import React from 'react';
import { Typography } from '@material-ui/core';
import { LinkRoute } from "components/LinkRoute";
import { ROOT } from './CONSTANTS';

export const NotFound = () => {
    return (
        <div>
            <Typography variant="h4" gutterBottom>
                404
            </Typography>
            <Typography variant="h6" gutterBottom>
                Page not found
            </Typography>
            <Typography variant="body1" gutterBottom>
                <LinkRoute to={ROOT}>
                    Go to home page
                </LinkRoute>
            </Typography>
        </div>
    );
}
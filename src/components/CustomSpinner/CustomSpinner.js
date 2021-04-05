import React from 'react'
import './CustomSpinner.scss';
import CircularProgress from '@material-ui/core/CircularProgress'
export default function CustomSpinner() {
    return (
        <div className="customSpinner">
            <CircularProgress />
        </div>
    )
}

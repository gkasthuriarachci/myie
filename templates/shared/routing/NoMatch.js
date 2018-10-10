import React from 'react'
import { Alert } from 'reactstrap'

const NoMatch = () => {
    return (
        <div>
           <h1>Resource not found</h1>
           <Alert color="danger">The requested resource could not be found.</Alert>
        </div>
    );
}

export default NoMatch
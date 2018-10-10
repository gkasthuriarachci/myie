import React from 'react'
import { Badge } from 'reactstrap'

const RoundBadge = ({ children, ...rest }) => {
    return (
        <Badge className={rest.className + ' round'} {...rest} >{children}</Badge>
    )
}

export default RoundBadge


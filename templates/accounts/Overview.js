import React from 'react'
import Card from './Card/Overview'
import Current from './Current/Overview'
import Loan from './Loan/Overview'
import Loyalty from './Loyalty/Overview'
import MotorLoan from './MotorLoan/Overview'
import Savings from './Savings/Overview'

const Overview = (props) => {
    switch (props.ProductType) {
        case "Card": return (<Card {...props}/>)
        case "Current": return (<Current {...props}/>)
        case "Loan": return (<Loan {...props}/>)
        case "Loyalty": return (<Loyalty {...props}/>)
        case "MotorLoan": return (<MotorLoan {...props}/>)
        case "Savings": return (<Savings {...props}/>)
        default: return (<div>Account type {props.ProductType} not supported</div>
        )
    }
}

export default Overview
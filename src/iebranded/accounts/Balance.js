import React from 'react'
import Card from './Card/Balance'
import Current from './Current/Balance'
import Loan from './Loan/Balance'
import Loyalty from './Loyalty/Balance'
import MotorLoan from './MotorLoan/Balance'
import Savings from './Savings/Balance'

const Balance = (props) => {
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

export default Balance
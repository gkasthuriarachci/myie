import React from 'react'

const Overview = (props) => {
    return (
        <div>
            <div className="label">Transactions</div>
            <div>{props.transactions ? "Expire " + props.transactions.ExpiryDate : "Loading..."}</div>
        </div>
    )
}

export default Overview
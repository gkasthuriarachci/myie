import React from 'react'
import { Row, Col } from 'reactstrap'

const Overview = (props) => {
    var account = props
    var transactions = []

    if (!(account.AvailableBalance < -account.OverdraftLimit || account.Balance < -account.OverdraftLimit) && account.transactions) {
        for (let index = 0; index < Math.min(3, account.transactions.Transactions.length); index++) {
            const element = account.transactions.Transactions[index]
            transactions.push(<Row key={index}>
                <Col xs={12} sm={6}><div className="label mt-2 mb-0">{element.Description}</div></Col>
                <Col xs={12} sm={6} className="text-xs-left text-sm-right">{element.Amount}</Col>
            </Row>)
        }
        if (account.transactions.Transactions.length > 0) {
            return (
                <div>
                    <div>
                        <h3 className="h4 mb-0">Latest points</h3>
                    </div>
                    {transactions}
                </div>
            )
        } else {
            return <div>Nothing in or out in the last month</div>
        }
    } else {
        return (
            <span></span>
        )
    }
}

export default Overview
import React from 'react'
import { Row, Col, Card } from 'reactstrap'
import Currency from 'react-currency-formatter'

const Overview = (props) => {
    const account = props
    const transactions = []

    if (!(account.AvailableBalance < -account.OverdraftLimit || account.Balance < -account.OverdraftLimit) && account.transactions) {
        for (let index = 0; index < Math.min(3, account.transactions.Transactions.length); index++) {
            const element = account.transactions.Transactions[index]
            transactions.push(<Row key={index}>
                <Col xs={12} sm={6}><div className="label mt-2 mb-0">{element.Description}</div></Col>
                <Col xs={12} sm={6} className="text-xs-left text-sm-right"><Currency
                    quantity={element.Amount}
                    currency={account.CurrencyCode} /></Col>
            </Row>)
        }
        if (account.transactions.Transactions.length > 0) {
            return (
                <div>
                    <div>
                        <h3 className="h4 mb-0">Latest transactions</h3>
                    </div>
                    {transactions}
                </div>
            )
        } else {
            return <p>Nothing in or out in the last month</p>
        }
    } else {
        return (
            <Card body outline color="warning">
                <h3 className="h4">Account overdrawn</h3>
                <p>Please make a payment to avoid further charges</p>
            </Card>
        )
    }
}

export default Overview
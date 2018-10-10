import React from 'react'
import { Link } from "react-router-dom"
import { Row, Col, Card } from 'reactstrap'
import Currency from 'react-currency-formatter'

const Overview = (props) => {
    const account = props

    const supports = function (account, type) {
        return account.Supports.indexOf(type) > -1;
    }

    const daysUntil = function (date) {
        const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
        const firstDate = new Date(date);
        const secondDate = new Date();
        const diffDays = Math.round((firstDate.getTime() - secondDate.getTime()) / (oneDay));
        return diffDays;
    }

    if (account.AccountStatus === "Closed") {
        return (
            <div>
                <div>
                    <h3 className="h4">This account is closed</h3>
                </div>
                <p>
                    Please <Link to="/contactus">speak to a member of our team</Link> to re-open or apply for a new credit card account.
                </p>
            </div>
        )
    } else {
        if (daysUntil(account.MakePaymentBy) <= 5 && daysUntil(account.MakePaymentBy) > 0 && account.MinimumPaymentAmount !== 0) {
            const text = !supports(account, 'ManageDirectDebit') ? `Credit card due in ${daysUntil(account.MakePaymentBy)} days` : `The balance below will be taken from your Current Account in ${daysUntil(account.MakePaymentBy)} days`
            return (
                <div>
                    <h3 className="h4">
                        Bill due
                    </h3>
                    <p className="mb-0">
                        {text}
                    </p>
                    <Row>
                        <Col xs={12} sm={6}><div className="label mt-2 mb-0">Balance due</div></Col>
                        <Col xs={12} sm={6}  className="text-xs-left text-sm-right"><Currency
                            quantity={account.Balance}
                            currency={account.CurrencyCode}
                        /></Col>

                    </Row>
                    <Row>
                        <Col xs={12} sm={6}><div className="label mt-2 mb-0">Minimum</div></Col>
                        <Col xs={12} sm={6} className="text-xs-left text-sm-right"><Currency
                            quantity={account.MinimumPaymentAmount}
                            currency={account.CurrencyCode}
                        /></Col>
                    </Row>
                </div>
            )
        } else if (supports(account, 'Transactions') && daysUntil(account.MakePaymentBy) >= 10 && account.Balance !== 0) {
            return (
                <div>
                    <div className="label">Transactions</div>
                    <div>{props.transactions ? "Expire " + props.transactions.ExpiryDate : "Loading..."}</div>
                </div>
            )
        } else if (daysUntil(account.MakePaymentBy) <= 0 && account.MinimumPaymentAmount !== 0) {
            return (<Card body outline color="warning">
                <h3 className="h4">Bill overdue</h3>
                <p className="mb-0">Pay at least the minimum</p>
                <Row>
                    <Col xs={12} sm={6}><div className="label mt-2 mb-0">Balance due</div></Col>
                    <Col xs={12} sm={6} className="text-xs-left text-sm-right"><Currency
                        quantity={account.Balance}
                        currency={account.CurrencyCode}
                    /></Col>

                </Row>
                <Row>
                    <Col xs={12} sm={6}><div className="label mt-2 mb-0">Minimum</div></Col>
                    <Col xs={12} sm={6} className="text-xs-left text-sm-right"><Currency
                        quantity={account.MinimumPaymentAmount}
                        currency={account.CurrencyCode}
                    /></Col>
                </Row>
            </Card>
            )
        }
    }
    return (
        <div>
            <div className="label">Transactions</div>
            <div>{props.transactions ? "Expire " + props.transactions.ExpiryDate : "Loading..."}</div>
        </div>
    )
}

export default Overview
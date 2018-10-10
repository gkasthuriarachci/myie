import React from 'react'
import { Row, Col, Card } from 'reactstrap'
import Currency from 'react-currency-formatter'

const Balance = (props) => {
    return (
        <Row>
            <Col xs={12} md={7}>
                <Card body className="balance-card">
                    <div className="h6">Your balance is</div>
                    <div className="h4"><Currency
                        quantity={props.Balance}
                        currency={props.CurrencyCode}
                    /></div>
                </Card>
            </Col>
            <Col xs={12} md={5}>
                <div>
                    <Currency
                        quantity={props.AvailableBalance}
                        currency={props.CurrencyCode}
                    />
                </div>
                <div className="label">available</div>
                <div><Currency
                    quantity={props.CreditLimit}
                    currency={props.CurrencyCode}
                />
                </div>
                <div className="label">credit limit</div>
            </Col>
        </Row>
    )
}

export default Balance
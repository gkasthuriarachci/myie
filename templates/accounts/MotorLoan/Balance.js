import React from 'react'
import { Row, Col, Card } from 'reactstrap'
import Currency from 'react-currency-formatter'

const Balance = (props) => {
    return (
        <Row>
            <Col xs={12} md={7}>
                <Card body className="balance-card">
                    <div className="h4">
                        <Currency
                            quantity={-props.Balance}
                            currency={props.CurrencyCode}
                        />
                        {}</div>
                    <div className="h6">left to pay</div>
                </Card>
            </Col>
            <Col xs={12} md={5}>
                <Card body className="balance-card">
                    <div className="h4">{props.PaymentsLeft}</div>
                    <div className="h6">months left</div>
                </Card>
            </Col>
        </Row>
    )
}

export default Balance
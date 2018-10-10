import React from 'react'
import { Row, Col, Card } from 'reactstrap'
import Currency from 'react-currency-formatter'

const Balance = (props) => {
    return (
        <Row>
            <Col xs={12} md={7}>
                <Card body className="balance-card">
                    <div className="h4">{props.Points}</div>
                    <div className="h6">points</div>
                </Card>
            </Col>
            <Col xs={12} md={5}>
                <Card body className="balance-card">
                    <div className="h4">
                        <Currency
                            quantity={props.MonetaryValue}
                            currency={props.CurrencyCode}
                        />
                    </div>
                    <div className="h6">in value</div>
                </Card>
            </Col>
        </Row>
    )
}

export default Balance
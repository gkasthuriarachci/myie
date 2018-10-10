import React from 'react'
import { Row, Col } from 'reactstrap'

import Currency from 'react-currency-formatter'
import { RoundBadge } from '@myie/interact-dom';

const Transaction = (props) => {
    const transaction = props
    const { position } = props
    const imgBackground = function (ch) {
        var imgColours = ["blue", "indigo", "pink", "red", "orange", "yellow", "green", "teal", "cyan"];
        var coloursCount = imgColours.length;
        var color = imgColours[position % coloursCount];
        return color + "-badge align-self-center";
    }

    const character = transaction.Description.substring(0, 1).toUpperCase()

    return (
        <tr className="transaction-card">
            <td>
                <Row>
                    <Col xs={2} md={1} className="col-icon">
                        <h2 className='h3'>
                            <RoundBadge className={imgBackground(character)}>{character}</RoundBadge>
                        </h2>
                    </Col>
                    <Col xs={5} sm={5} md={8} className="col-description align-self-center">
                        <div className="transaction-description">
                            {transaction.Description}
                        </div>
                    </Col>
                    <Col xs={5} sm={5} md={3} className="text-right col-transaction  align-self-center">
                        <div className="transaction-amount">
                            <Currency
                                quantity={transaction.Amount}
                                currency={transaction.AccountCurrencyCode}
                            />
                        </div>
                    </Col>
                </Row>
            </td>
        </tr>
    )
}

export default Transaction
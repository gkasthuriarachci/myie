import React from 'react'
import { Card, Row, Col } from 'reactstrap'
import Balance from './Balance'
import Overview from './Overview'
import Links from './Links'

class Summary extends React.Component {

    render() {
        var colSize = this.props.mode === 1 ? 12 : 6 

        const account = this.props;
        return (
            <Card body className="account-card account-summary">
                <h2>{account.AccountName} <span className='lead'>{account.ProductType === "Card" ? 'ending '+account.AccountNumber : account.AccountNumber}</span></h2>
                <Row>
                    <Col xs={12} lg={colSize}>
                        <Balance {...account} />
                    </Col>
                    <Col xs={12} lg={colSize}>
                        <Overview  {...account} />
                    </Col>
                </Row>
                <Links {...account}/>
               
            </Card>
        );
    }
}

export default Summary



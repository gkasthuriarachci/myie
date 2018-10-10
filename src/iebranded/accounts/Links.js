import React from 'react'
import { Link } from "react-router-dom"
import { Col, Row } from 'reactstrap'
import { Utility } from '@myie/interact'

const Overview = (props) => {
    switch (props.ProductType) {
        case "Card": return (
            <div>
                <Link className="mr-3" to={"/card/pay-by-card/" + Utility.hexEncode(props.AccountKey.Key)}>Make a payment</Link>
                <Link className="mr-3" to={"/accounts/details/" + Utility.hexEncode(props.AccountKey.Key)}>Account details</Link>
            </div>
        )


        default: return (
            <Row>
                <Col sx={"auto"} sm={"auto"} lg={"auto"}>
                    <Link className="mr-3" to={"/move-money/"}>Make a payment</Link>
                </Col>
                <Col sx={"auto"}>
                    <Link className="mr-3" to={"/accounts/details/" + Utility.hexEncode(props.AccountKey.Key)}>Account details</Link>
                </Col>
            </Row>
        )
    }
}

export default Overview
import React from 'react'
import { Row, Col, Button, Collapse } from 'reactstrap'
import { FaPencilAlt } from 'react-icons/fa';

const SectionHeader = (props) => {
    return (
        <Row>
            <Col>
                <h2>{props.title}</h2>
            </Col>
            <Col>
                <Collapse isOpen={props.isOpen}>
                    <Button  
                        onClick={props.onClick} 
                        color="link"
                        className="float-right"
                    >
                    Edit <FaPencilAlt />
                    </Button>
                </Collapse>
            </Col>
        </Row>
    )
}

export default SectionHeader
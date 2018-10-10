import React from 'react'
import { Link } from "react-router-dom"
import { connect } from 'react-redux'
import { Table, Fade, Row, Col, Navbar, Nav, NavLink, NavItem, FormGroup, Button, TabContent, TabPane } from 'reactstrap'
import Balance from './Balance'
import Transaction from './Transaction'
import { mapStateToProps } from '@myie/interact-accounts'
import { NoMatch } from '@myie/interact-dom'
import { Utility } from '@myie/interact'

class Details extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            activeTab: "transactions"
        }
    }

    setTab(e) {
        e.preventDefault()
        const current = e.target.href.substring(e.target.href.indexOf('#') + 1)
        this.setState({ ...this.state, activeTab: current })

    }

    render() {
        var account = {}
        var { activeTab } = this.state
        const thisProps = this.props;
        if (this.props && this.props.accounts && this.props.accounts.Accounts) {
            account = this.props.accounts.Accounts.find(function (element) {
                return Utility.hexEncode(element.AccountKey.Key) === thisProps.match.params.id;
            });
            if (!account) {
                return (
                    <NoMatch />
                )
            }
        } else {
            return <div>Loading accounts...</div>
        }
        const transactions = [];
        if (account.transactions) {
            var index = 0;
            account.transactions.Transactions.forEach(transaction => {
                transactions.push(<Transaction {...transaction} AccountCurrencyCode={account.CurrencyCode} key={index} position={index} />)
                index++
            })
        }
        return (
            <div className="account-header">
                <FormGroup>
                    <h1 className="h2">{account.AccountName} <small>{account.ProductType === "Card" ? 'ending ' + account.AccountNumber : account.AccountNumber}</small></h1>
                    <Row>
                        <Col xs={12} lg={6}>
                            <Balance {...account} />
                        </Col>
                        <Col xs={12} lg={6}>
                            {account.ProductType === "Card" ? <Link className="btn btn-link" to={"/card/pay-by-card/" + Utility.hexEncode(account.AccountKey.Key)}>Make a payment</Link> : ''}
                        </Col>
                    </Row>
                </FormGroup>
                <Nav tabs aria-label="Navigation Tabs" role="tablist">
                    <NavItem>
                        <NavLink role='tab' href='#transactions' active={activeTab === 'transactions'} onClick={(e) => this.setTab(e)}>Transactions</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink role='tab' href='#downloads' active={activeTab === 'downloads'} onClick={(e) => this.setTab(e)}>Downloads</NavLink>
                    </NavItem>
                </Nav>
                <TabContent activeTab={activeTab}>
                    <TabPane role='tabpanel' tabId="transactions">
                        <Fade in={activeTab === 'transactions'}>
                            <Navbar color="light" light className='form-inline'>
                                <Nav>
                                    <NavItem>
                                        Latest transactions
                            </NavItem>
                                </Nav>
                                <Nav>
                                    <NavItem>
                                        <Button className="ml-2" color='secondary'>Export</Button>
                                    </NavItem>
                                    <NavItem>
                                        <Button className="ml-2" color='secondary'>Print</Button>
                                    </NavItem>
                                </Nav>

                            </Navbar>

                            <Table borderless hover>
                                <tbody>
                                    {transactions}
                                </tbody>
                            </Table>
                            <hr />

                        </Fade >
                    </TabPane>
                    <TabPane role='tabpanel' tabId="downloads">
                        <Fade in={activeTab === 'downloads'}>
                            <div className='h2'>
                                Downloads go here
                            </div>
                        </Fade >
                    </TabPane>
                </TabContent>
            </div>
        )
    }
}

export default connect(mapStateToProps)(Details)
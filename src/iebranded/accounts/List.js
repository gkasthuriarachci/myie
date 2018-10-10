import React from 'react'
import { connect } from 'react-redux'
import { CardColumns, Button, ButtonGroup, Fade, Col, Row } from 'reactstrap'
import Summary from './Summary'
import { mapStateToProps, mapDispatchToProps } from '@myie/interact-accounts';

class AccountList extends React.Component {
    constructor(props) {
        super(props)
        this.state = { shown: true }
    }

    setMode = (mode) => {
        const props = this.props
        if (mode === props.mode) return
        const { setListMode } = props
        this.setState({ shown: false })
        setTimeout(
            function () {
                setListMode(mode)
                this.setState({ shown: true })
            }.bind(this),
            250
        );
    }

    setStatus = (status) => {

        const props = this.props
        if (status === props.status) return
        const { setStatusMode } = props
        this.setState({ shown: false })
        setTimeout(
            function () {
                setStatusMode(status)
                this.setState({ shown: true })
            }.bind(this),
            250
        );
    }

    render() {
        const props = this.props
        var { accounts: acc = {}, isFetching, mode, status } = props
        var { Accounts: list = [] } = acc
        var children = []
        var gridToggle = null;
        var statusToggle = null;
        var accounts = []
        const { shown } = this.state
        if (!list.find(function (acc) {
            return acc.AccountStatus !== "Closed"
        })) {

        }

        list.forEach(account => {
            if ((account.AccountStatus !== "Closed") === (!props.status)) {
                accounts.push(account)
            }
        })

        if (accounts.length > 1) {
            gridToggle = (
                <ButtonGroup className="mb-2">
                    <Button color="primary" active={!mode} aria-pressed={!mode} onClick={() => this.setMode(0)}>List</Button>
                    <Button color="primary" active={!!mode} aria-pressed={!!mode} onClick={() => this.setMode(1)}>Grid</Button>
                </ButtonGroup>
            )
        } else {
            mode = 0;
        }

        if (accounts.length !== list.length) {
            statusToggle = (
                <ButtonGroup className="mb-2">
                    <Button color="primary" active={!status} aria-pressed={!status} onClick={() => this.setStatus(0)}>Active</Button>
                    <Button color="primary" active={!!status} aria-pressed={!!status} onClick={() => this.setStatus(1)}>Closed</Button>
                </ButtonGroup>
            )
        } else {
            status = 0;
        }

        accounts.forEach(account => {
            children.push(<Summary mode={mode} {...account} history={props.history} key={account.AccountKey.Key} />)
        })


        if (children.length === 0) {
            if (!isFetching) {
                const state = !props.status ? "active" : "closed"
                children.push(<h2 key={0}>{`There are no ${state} accounts to view`}</h2>)
            } else {
                children.push(<p key={0}>{`Loading accounts...`}</p>)
            }
        }

        return (
            <div id="account-list">

                <Row>
                    <Col xs={12} sm={4}>
                        <h1>Accounts</h1>
                    </Col>
                    <Col xs={12} sm={8} className="text-xs-left text-sm-right">
                        <div>
                            {statusToggle}
                            {' '}
                            {gridToggle}
                        </div>
                    </Col>
                </Row>

                <Fade in={shown}>
                    <CardColumns className={!mode ? "list-mode" : "grid-mode"}>
                        {children}
                    </CardColumns>
                </Fade>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AccountList)

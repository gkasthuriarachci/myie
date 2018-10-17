import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { PrivateRoute, NoMatch } from "@myie/interact-dom";
import { Applications } from "@myie/interact-applications-dom";
import { Authentication, AuthButton } from "@myie/interact-authentication-dom";
import { Media, Container } from "reactstrap";
import Menu from "./Menu";
import Home from "./Home";

class Acquire extends Component {
  render() {
    return (
      <div className="connect">
        <Router>
          <div>
            <header>
              <Container>
                <Media>
                  <div className="d-flex align-self-center">
                    <img
                      className="logo-svg"
                      src="/logo.svg"
                      alt="Interact Connect logo"
                    />
                  </div>
                  <Media body />
                  <div className="d-flex align-self-center">
                    <AuthButton />
                  </div>
                </Media>
                <Menu />
              </Container>
            </header>

            <Container className="content-container">
              <main className="left-container">
                <Switch>
                  <Route exact path="/" component={Home} />
                  <Route path="/authentication" component={Authentication} />
                  <PrivateRoute path="/applications" component={Applications} />
                  <Route component={NoMatch} />
                </Switch>
              </main>
              <aside className="right-container" />
            </Container>

            <footer>
              <Container>
                <p>
                  &copy; 2018 ieDigital. All rights reserved. No endorsement or
                  approval of any third parties or their advice, opinions,
                  information, products or services is expressed or implied by
                  any information on this Site or by any hyperlinks to or from
                  any third party websites or pages. Your use of this website is
                  subject to the terms and conditions governing it. Please read
                  these terms and conditions before using the website.
                </p>
                <p> &copy; 2018 ieDigital. All rights reserved.v0.1</p>
              </Container>
            </footer>
          </div>
        </Router>
      </div>
    );
  }
}

export default Acquire;

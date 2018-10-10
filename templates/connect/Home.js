import React from 'react'

const Home = () => {
    return (
        <div>
            <h1>Home</h1>
            <p>
                Welcome to the ieDigital Interact React Connection Demo. Sign in via the sign in button top right.
                The following user logins are available.
            </p>
            <h2>Single account logins</h2>
            <dl className="row">
                <dt className="col-4">singlecurrent</dt><dd className="col-8">single sample current account</dd>
                <dt className="col-4">singlecreditcard</dt><dd className="col-8">single sample credit card accounts</dd>
                <dt className="col-4">singleloan</dt><dd className="col-8">single sample loan account</dd>
                <dt className="col-4">singlemotorfinance</dt><dd className="col-8">single sample motor finance account</dd>
                <dt className="col-4">arrearscreditcard</dt><dd className="col-8">single sample credit card account in arrears</dd>
                <dt className="col-4">fixedsavings</dt><dd className="col-8">single fixed savings account</dd>
                <dt className="col-4">flexiblesavings</dt><dd className="col-8">single flexible savings account</dd>
            </dl>
            <h2>Multiple account logins</h2>
            <dl className="row">
                <dt className="col-4">current</dt><dd className="col-8">all current accounts in various states</dd>
                <dt className="col-4">creditcard</dt><dd className="col-8">all credit card accounts in various states</dd>
                <dt className="col-4">savings</dt><dd className="col-8">all savings accounts in various states</dd>
                <dt className="col-4">loan</dt><dd className="col-8">all loan accounts in various states</dd>
                <dt className="col-4">loyalty</dt><dd className="col-8">all loyalty accounts in various states</dd>
                <dt className="col-4">motorfinance</dt><dd className="col-8">all motor finance accounts in various states</dd>
                <dt className="col-4">other</dt><dd className="col-8">all available accounts</dd>
            </dl>
        </div>
    );
}

export default Home
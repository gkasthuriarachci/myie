import React from 'react'
import Currency from 'react-currency-formatter'


const FormattedCurrency = (props) => {
    const { quantity, ...rest } = props
    const qty = parseFloat(quantity)
    if (!qty || isNaN(qty)) return <span>{props.fallback || ""}</span>
    return (
        <Currency quantity={qty} {...rest} />
    );
}

export default FormattedCurrency
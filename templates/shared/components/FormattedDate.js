import React from "react";
import Moment from 'react-moment';
import { Settings } from '@myie/interact'

const FormattedDate = (props) => {
    const { format = Settings.dateFormat } = props
    return (
        <Moment format={format} {...props} />
    );
}

export default FormattedDate



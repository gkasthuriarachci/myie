// components
import Check from './components/Check'
import Errors from './components/Errors'
import FormattedDate from './components/FormattedDate'
import FormattedCurrency from './components/FormattedCurrency'
import Radio from './components/Radio'
import RadioButton from './components/RadioButton'
import RadioGroup from './components/RadioGroup'
import RoundBadge from './components/RoundBadge'
import Text from './components/Text'
import TextArea from './components/TextArea'
import DropDown from './components/DropDown'
import Numeric from './components/Numeric'
import Currency from './components/Currency'
import Slider from './components/Slider'
import Date from './components/Date'
import AddressLookup from './components/AddressLookup'


// routing
import PrivateRoute from './routing/PrivateRoute'
import NoMatch from './routing/NoMatch'

// setup initial moment config
import moment from 'moment';
import 'moment/locale/en-gb';

moment.locale(navigator.language)

export {
    Check,
    Errors,
    FormattedDate,
    FormattedCurrency,
    Radio,
    RoundBadge,
    Text,
    TextArea,
    Currency,
    Numeric,
    Slider,
    Date,
    DropDown,
    RadioGroup,
    RadioButton,
    AddressLookup,
    PrivateRoute,
    NoMatch
}
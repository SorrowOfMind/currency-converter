import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import Button from '@material-ui/core/Button';

import * as actionCreator from '../actions/actions';

import '../styles/inputs.css';

export class Inputs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputs: {
                amount: '',
                from: '',
                to: ''
            },
            errors: {}
        }
    }

    onChange = e => {
        let inputs = this.state.inputs;
        inputs[e.target.name] = (e.target.value).toUpperCase().trim();
        this.setState({inputs});
        console.log(this.state);
    }

    validateInputs = () => {
        const inputs = this.state.inputs;
        let errors = {};
        let isValid = true;

        const regexAmount = /[0-9]/;
        const regexCurr = /^[A-Za-z]{3}$/;

        const errorAmount = "please enter the amount";
        const errorCurr = "please enter the currency code";

        if (!inputs.amount) {
            isValid = false;
            errors.amount = errorAmount;
        }

        if (inputs.amount) {
            if (!regexAmount.test(inputs.amount)) {
                isValid = false;
                errors.amount = errorAmount;
            }
        }

        if (!inputs.from) {
            isValid = false;
            errors.from = errorCurr;
        } 
        
        if (inputs.from) {
            if (!regexCurr.test(inputs.from)) {
                isValid = false;
                errors.from = errorCurr;
            }
        }

        if (!inputs.to) {
            isValid = false;
            errors.to = errorCurr;
        } 
        
        if (inputs.to) {
            if (!regexCurr.test(inputs.to)) {
                isValid = false;
                errors.to = errorCurr;
            }
        }

        this.setState({
            errors
        });

        return isValid;
    }

    onSubmit = e => {
        e.preventDefault();
        const input = this.state.inputs;
        if (this.validateInputs()) {
            this.props.setInputsData(input);
            this.props.fetchExRates(input);
            this.props.fetchCountries(input.to);
            
        }

        this.setState({inputs:{
            amount: '',
            from : '',
            to: ''
        }});
    }

    render() {
        const error = this.state.errors;
        return (
            <form className="inputs" onSubmit={this.onSubmit}>
                <div className="form">
                    <div className="wrapper">
                        <label className="label label__amount" htmlFor="amount">Amount</label>
                        <input
                            type="text" 
                            className="input input__amount" 
                            id="amount"
                            name="amount"
                            value={this.state.inputs.amount}
                            onChange={this.onChange}
                        />
                        <div className="errorMsg">{error.amount}</div>
                    </div>
                    <div className="wrapper">
                        <label className="label label__from" htmlFor="from">From</label>
                        <input
                            type="text"
                            className="input input__from" 
                            id="from"
                            name="from"
                            value={this.state.inputs.from}
                            onChange={this.onChange}
                        />
                        <div className="errorMsg">{error.from}</div>
                    </div>
                    <div className="wrapper">
                        <label className="label label__to" htmlFor="to">To</label>
                        <input
                            type="text" 
                            className="input input__to" 
                            id="to"
                            name="to"
                            value={this.state.inputs.to}
                            onChange={this.onChange}
                        />
                        <div className="errorMsg">{error.to}</div>
                    </div>
                </div>
                <Button 
                    type="submit" 
                    className="btn" 
                    variant="contained" 
                    >Calculate</Button>
            </form>
        )
    }
}

Inputs.propTypes = {
    fetchExRates: PropTypes.func.isRequired,
    fetchCountries: PropTypes.func.isRequired,
    setInputsData: PropTypes.func.isRequired
}

const mapDispatchToProps = dispatch => {
    return {
        fetchExRates: obj => dispatch(actionCreator.fetchExRates(obj)),
        setInputsData: obj => dispatch(actionCreator.setInputsData(obj)),
        fetchCountries: str => dispatch(actionCreator.fetchCountries(str))
    }
}

export default connect(null, mapDispatchToProps)(Inputs);

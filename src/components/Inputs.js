import React, {Component} from 'react';
import Button from '@material-ui/core/Button';

import '../styles/inputs.css';

export class Inputs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputs: {
                amount: 0,
                from: '',
                to: ''
            },
            errors: {}
        }
    }

    onChange = e => {
        let inputs = this.state.inputs;
        inputs[e.target.name] = e.target.value;
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
        if (this.validateInputs()) {
            
        }
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
                            onChange={this.onChange}
                        />
                        <div className="errorMsg">{error.to}</div>
                    </div>
                </div>
                <Button type="submit" className="btn" variant="contained" >Calculate</Button>
            </form>
        )
    }
}

export default Inputs;

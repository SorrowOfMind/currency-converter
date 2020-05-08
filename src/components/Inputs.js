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
            errors: {
                amount: '',
                from: '',
                to: ''
            }
        }
    }

    onChange = e => {
        let inputs = this.state.inputs;
        inputs[e.target.name] = e.target.value;
        this.setState({inputs});
        console.log(this.state);
    }

    validateInputs = () => {
        let inputs = this.state.inputs;
        let errors = this.state.errors;
        let isValid = true;

        const regexAmount = /[0-9]*/;
        const regexCurr = /[A-Za-z]{3}/;

        if (!inputs.amount) {
            isValid = false;
            const error = "please enter the amount to convert"
            errors.amount = error;
        } else if (typeof inputs.amount !== 'undefined') {
            inputs.amount.match(regexAmount) ? isValid = true : errors.amount = error;
        }

        if (!inputs.from) {
            isValid = false;
            const error = "please enter the currency code to convert from";
            errors.from = error;
        } else if (typeof inputs.from !== 'undefined') {
            inputs.from.match(regexCurr) ? isValid = true : errors.from = error;
        }

        if (!inputs.to) {
            isValid = false;
            const error = "please enter the currency code to convert to"
            errors.to = error;
        } else if (typeof inputs.to !== 'undefined') {
            inputs.to.match(regexCurr) ? isValid = true : errors.to = error;
        }

        return isValid;
    }

    onSubmit = e => {
        e.preventDefault();
        
    }

    render() {
        return (
            <form className="inputs">
                <div className="form">
                    <div className="wrapper">
                        <label className="label label__amount" htmlFor="amount">Amount</label>
                        <input
                            type="text" 
                            className="input input__amount" 
                            id="amount"
                            name="amount"
                            required
                            onChange={this.onChange}
                        />
                    </div>
                    <div className="wrapper">
                        <label className="label label__from" htmlFor="from">From</label>
                        <input
                            type="text"
                            className="input input__from" 
                            id="from"
                            name="from"
                            required
                            onChange={this.onChange}
                        />
                    </div>
                    <div className="wrapper">
                        <label className="label label__to" htmlFor="to">To</label>
                        <input
                            type="text" 
                            className="input input__to" 
                            id="to"
                            name="to"
                            required
                            onChange={this.onChange}
                        />
                    </div>
                </div>
                <Button type="submit" className="btn" variant="contained">Calculate</Button>
            </form>
        )
    }
}

export default Inputs;

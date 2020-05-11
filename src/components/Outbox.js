import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import '../styles/outbox.css';

export class Outbox extends Component {
    render() {
        const {amount, from, to} = this.props.inputs;
        const exRate = this.props.exRate;
        const countries = this.props.countries;
        console.log(amount);
        return (
            <div>
                <Box className="card__wrapper">
                            {exRate
                                ? (
                                    <Card variant="outlined" className="card">
                                        <CardContent>
                                            <Typography
                                                className="card__header"
                                                variant="h4"
                                                color="textSecondary"
                                                gutterBottom>
                                                    {amount} {from} is equal to:
                                            </Typography>
                                            <Typography 
                                                variant="h3" 
                                                component="div"
                                                className="card__totalAmount">
                                                {(parseFloat(amount) * exRate).toFixed(2)} {to}
                                            </Typography>
                                            <Typography 
                                                variant="h5" 
                                                component="ul"
                                                className="card__countries">
                                                <span>You can pay with {to} in:</span>
                                                {countries.map(country => <li>{country}</li>)}
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                )
                                : null}
                </Box>
            </div>
        )
    }
}

Outbox.propTypes = {
    inputs: PropTypes.object.isRequired,
    exRate: PropTypes.number.isRequired,
    countries: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
    inputs: state.inputs,
    exRate: state.exRate,
    countries: state.countries
})

export default connect(mapStateToProps, null)(Outbox);

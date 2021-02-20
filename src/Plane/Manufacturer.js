import React, {Component} from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';
import {
    manufacturerApiPrefix
} from '../Config';

export default class Manufacturer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            manufacturerList: []
        };
        this.getManufacturers();
        this.getManufacturers = this.getManufacturers.bind(this);
    }

    getManufacturers() {
        const that = this;
        Axios.get(
            `${manufacturerApiPrefix}`
        ).then(function (response) {
            console.log(response.data);
            that.setState({
                manufacturerList: response.data
            })
        }).catch(function (err) {
            console.log(err);
        });
    }

    render() {
        return (
            <div>
                <h1>Aviation Info</h1>
                <h2>Manufacturers</h2>

                <div>
                    <ul>
                        {this.state.manufacturerList.map((manufacturer) => {
                            let url = `aviationinfo/${manufacturer.name}`
                            return <li>
                                <Link to={url}>
                                    <h3>{manufacturer.name}</h3>
                                </Link>
                            </li>
                        })}
                    </ul>
                </div>
            </div>
            
        );
    }
}
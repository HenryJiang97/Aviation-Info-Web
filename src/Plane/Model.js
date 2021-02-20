import React, {Component} from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';
import {
    modelApiPrefix
} from '../Config';

export default class Model extends Component {

    constructor(props) {
        super(props);
        this.state = {
            manufacturer: this.props.match.params.manfuacturer,
            modelList: []
        };
        this.getModels();
        this.getModels = this.getModels.bind(this);
    }

    getModels() {
        const that = this;
        Axios.get(
            `${modelApiPrefix}/manufacturer/${this.state.manufacturer}`
        ).then(function (response) {
            console.log(response.data);
            that.setState({
                modelList: response.data
            })
        }).catch(function (err) {
            console.log(err);
        });
    }

    render() {
        return (
            <div>
                <h1>Aviation Info</h1>
                <h2>{this.state.manufacturer + " Models"}</h2>

                <div>
                    <ul>
                        {this.state.modelList.map((model) => {
                            let url = `/aviationinfo/model/${model.id}`
                            return <li>
                                <Link to={url}>
                                    <h3>{model.name}</h3>
                                </Link>
                            </li>
                        })}
                    </ul>
                </div>
            </div>
            
        );
    }
}
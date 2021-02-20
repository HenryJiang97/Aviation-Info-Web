import React, {Component} from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';
import {
    planeApiPrefix
} from '../Config';

export default class plane extends Component {

    constructor(props) {
        super(props);
        this.state = {
            plane: this.props.match.params.submodel,
            // submodelList: []
        };
        // this.getSubmodels();
        this.getSubmodels = this.getSubmodels.bind(this);
    }

    getSubmodels() {
        const that = this;
        Axios.get(
            `${planeApiPrefix}/model/${this.state.model}`
        ).then(function (response) {
            console.log(response.data);
            that.setState({
                submodelList: response.data
            })
        }).catch(function (err) {
            console.log(err);
        });
    }

    render() {
        return (
            <div>
                <h1>Aviation Info</h1>
                <h2>{this.state.plane}</h2>

                {/* <div>
                    <ul>
                        {this.state.submodelList.map((subModel) => {
                            let url = `/aviationinfo/submodel/${subModel.id}`
                            return <li>
                                <Link to={url}>
                                    <h3>{subModel.name}</h3>
                                </Link>
                            </li>
                        })}
                    </ul>
                </div> */}
            </div>
            
        );
    }
}
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
            modelList: [],
            id: "",
            name: "",
        };
        this.getModels();
        this.getModels = this.getModels.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleAddClick = this.handleAddClick.bind(this);
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

    // Add new model
    addModel() {
        const that = this;
        Axios.post(
            `${modelApiPrefix}`,
            {
                "id": that.state.id,
                "name": that.state.name,
                "manufacturer": that.state.manufacturer,
            }
        ).then(function(response) {
            alert("Model added");
        }).catch(function(err) {
            alert("Error");
            console.log(err, "Error adding new model");
        });
    }

    handleInputChange(evt) {
        this.setState(
            {
                [evt.target.id]: evt.target.value
            }
        )
    }

    handleAddClick() {
        this.addModel();
        this.setState({
            id: "",
            name: "",
        });
        document.getElementById("id").value = "";
        document.getElementById("name").value = "";
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

                {/* Add Model */}
                <div>
                    <h2>Add</h2>

                    <div>
                        <label>Id: </label>
                        <input id="id" onChange={this.handleInputChange}></input>
                    </div>
                    
                    <div>
                        <label>Name: </label>
                        <input id="name" onChange={this.handleInputChange}></input>
                    </div>

                    <button id="addButton" onClick={this.handleAddClick}>Add Model</button>
                </div>
            </div>
            
        );
    }
}
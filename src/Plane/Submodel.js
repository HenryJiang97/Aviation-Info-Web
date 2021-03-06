import React, {Component} from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';
import {
    planeApiPrefix
} from '../Config';

import './css/submodel.css';

export default class Submodel extends Component {

    constructor(props) {
        super(props);
        this.state = {
            model: this.props.match.params.model,
            submodelList: [],
            id: "",
            name: "",
            manufacturer: "",
            seats: "",
            length: "",
            wingspan: "",
            height: "",
            speed: "",
            range: "",
            engine: "",
            thrust: "",
            takeoff: "",
            takeoffWeight: "",
            fuelCapacity: "",
        };
        this.getSubmodels();
        this.getSubmodels = this.getSubmodels.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleAddClick = this.handleAddClick.bind(this);
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


    // Add plane
    addPlane() {
        const that = this;
        Axios.post(
            `${planeApiPrefix}`,
            {
                "id": that.state.id,
                "name": that.state.name,
                "manufacturer": that.state.manufacturer,
                "model": that.state.model,
                "seats": that.state.seats,
                "length": that.state.length,
                "wingspan": that.state.wingspan,
                "height": that.state.height,
                "speed": that.state.speed,
                "range": that.state.range,
                "engine": that.state.engine,
                "thrust": that.state.thrust,
                "takeoff": that.state.takeoff,
                "takeoffWeight": that.state.takeoffWeight,
                "fuelCapacity": that.state.fuelCapacity,
            }
        ).then(function(response) {
            alert("Plane added");
        }).catch(function(err) {
            alert("Error");
            console.log(err, "Error adding new plane");
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
        this.addPlane();
        this.setState({
            id: "",
            name: "",
            manufacturer: "",
            seats: "",
            length: "",
            wingspan: "",
            height: "",
            speed: "",
            range: "",
            engine: "",
            thrust: "",
            takeoff: "",
            takeoffWeight: "",
            fuelCapacity: "",
        });
        document.getElementById("id").value = "";
        document.getElementById("name").value = "";
        document.getElementById("manufacturer").value = "";
        document.getElementById("seats").value = "";
        document.getElementById("length").value = "";
        document.getElementById("wingspan").value = "";
        document.getElementById("height").value = "";
        document.getElementById("speed").value = "";
        document.getElementById("range").value = "";
        document.getElementById("engine").value = "";
        document.getElementById("thrust").value = "";
        document.getElementById("takeoff").value = "";
        document.getElementById("takeoffWeight").value = "";
        document.getElementById("fuelCapacity").value = "";
    }



    render() {
        return (
            <div>
                <h1>Aviation Info</h1>
                <h2>{"Submodels of " + this.state.model}</h2>

                <div>
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
                </div>


                {/* Add Plane*/}
                <div>
                    <h2>Add</h2>

                    <div>
                        <div>
                            <label>Id: </label>
                            <input id="id" onChange={this.handleInputChange}></input>
                        </div>
                        
                        <div>
                            <label>Name: </label>
                            <input id="name" onChange={this.handleInputChange}></input>
                        </div>
                        
                        <div>
                            <label>Manufacturer: </label>
                            <input id="manufacturer" onChange={this.handleInputChange}></input>
                        </div>

                        <div>
                            <label>Seats: </label>
                            <input id="seats" onChange={this.handleInputChange}></input>
                        </div>
                        
                        <div>
                            <label>Length: </label>
                            <input id="length" onChange={this.handleInputChange}></input>
                        </div>

                        <div>
                            <label>Wingspan: </label>
                            <input id="wingspan" onChange={this.handleInputChange}></input>
                        </div>

                        <div>
                            <label>Height: </label>
                            <input id="height" onChange={this.handleInputChange}></input>
                        </div>

                        <div>
                            <label>Speed: </label>
                            <input id="speed" onChange={this.handleInputChange}></input>
                        </div>

                        <div>
                            <label>Range: </label>
                            <input id="range" onChange={this.handleInputChange}></input>
                        </div>

                        <div>
                            <label>Engine: </label>
                            <input id="engine" onChange={this.handleInputChange}></input>
                        </div>

                        <div>
                            <label>Thrust: </label>
                            <input id="thrust" onChange={this.handleInputChange}></input>
                        </div>

                        <div>
                            <label>Takeoff: </label>
                            <input id="takeoff" onChange={this.handleInputChange}></input>
                        </div>

                        <div>
                            <label>Takeoff Weight: </label>
                            <input id="takeoffWeight" onChange={this.handleInputChange}></input>
                        </div>

                        <div>
                            <label>Fuel Capacity: </label>
                            <input id="fuelCapacity" onChange={this.handleInputChange}></input>
                        </div>

                    </div>

                    <button id="addButton" onClick={this.handleAddClick}>Add Plane</button>
                </div>
            </div>
        );
    }
}
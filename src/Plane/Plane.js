import React, {Component} from 'react';
import Axios from 'axios';
import {
    planeApiPrefix
} from '../Config';

export default class plane extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: this.props.match.params.submodel,
            name: "",
            manufacturer: "",
            model: "",
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
        this.getDetails();
        this.getDetails = this.getDetails.bind(this);
    }

    getDetails() {
        const that = this;
        Axios.get(
            `${planeApiPrefix}/id/${this.state.id}`
        ).then(function (response) {
            that.setState({
                name: response.data[0]['name'],
                manufacturer: response.data[0]['manufacturer'],
                model: response.data[0]['model'],
                seats: response.data[0]['seats'],
                length: response.data[0]['length'],
                wingspan: response.data[0]['wingspan'],
                height: response.data[0]['height'],
                speed: response.data[0]['speed'],
                range: response.data[0]['range'],
                engine: response.data[0]['engine'],
                thrust: response.data[0]['thrust'],
                takeoff: response.data[0]['takeoff'],
                takeoffWeight: response.data[0]['takeoffWeight'],
                fuelCapacity: response.data[0]['fuelCapacity'],
            })
        }).catch(function (err) {
            console.log(err);
        });
    }

    render() {
        return (
            <div>
                <h1>Aviation Info</h1>

                <div>
                    <h2>Basic</h2>
                    
                    <div>
                        <h3>Id: {this.state.id}</h3>
                    </div>
                    <div>
                        <h3>Name: {this.state.name}</h3>
                    </div>
                    <div>
                        <h3>Manufacturer: {this.state.manufacturer}</h3>
                    </div>
                    <div>
                        <h3>Model: {this.state.model}</h3>
                    </div>
                    <div>
                        <h3>Seats: {this.state.seats}</h3>
                    </div>
                </div>

                <div>
                    <h2>Dimension</h2>
                    
                    <div>
                        <h3>Length: {this.state.length}</h3>
                    </div>
                    <div>
                        <h3>Wingspan: {this.state.wingspan}</h3>
                    </div>
                    <div>
                        <h3>Height: {this.state.height}</h3>
                    </div>
                </div>

                <div>
                    <h2>Performance</h2>

                    <div>
                        <h3>Speed: {this.state.speed}</h3>
                    </div>
                    <div>
                        <h3>Range: {this.state.range}</h3>
                    </div>
                    <div>
                        <h3>Engine: {this.state.engine}</h3>
                    </div>
                    <div>
                        <h3>Thrust: {this.state.id}</h3>
                    </div>
                    <div>
                        <h3>Takeoff: {this.state.takeoff}</h3>
                    </div>
                    <div>
                        <h3>Takeoff Weight: {this.state.takeoffWeight}</h3>
                    </div>
                    <div>
                        <h3>Fuel Capacity: {this.state.fuelCapacity}</h3>
                    </div>
                </div>
            </div>
            
        );
    }
}
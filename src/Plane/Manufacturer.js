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
            manufacturerList: [],
            nameInput: ""
        };
        this.getManufacturers();
        this.getManufacturers = this.getManufacturers.bind(this);
        this.addManufacturer = this.addManufacturer.bind(this);
        this.handleAddClick = this.handleAddClick.bind(this);
        this.handleNameInputChange = this.handleNameInputChange.bind(this);
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

    // Add manufacturer
    addManufacturer(id, name) {
        const that = this;
        Axios.post(
            `${manufacturerApiPrefix}`,
            {
                "id": id,
                "name": name
            }
        ).then(function (response) {
            alert("Added");
        }).catch(function (err) {
            alert("Error adding new manufacturer");
            console.log(err, "Error adding new manufacturer");
        });
    }

    handleAddClick() {
        let name = this.state.nameInput;
        if (name == "") {
            alert("No input");
        } else {
            this.addManufacturer(name, name);
        }
        this.setState({nameInput: ""});
        document.getElementById("nameInput").value = "";
    }

    handleNameInputChange(evt) {
        this.setState({nameInput: evt.target.value});
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

                <div>
                    <h2>Add</h2>
                    
                    <div>
                        <label>Name: </label>
                        <input id="nameInput" onChange={this.handleNameInputChange}></input>
                    </div>

                    <button id="addButton" onClick={this.handleAddClick}>Add Manufacturer</button>
                </div>
                
            </div>
            
        );
    }
}
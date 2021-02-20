import React, {Component} from 'react';
import { Link, Route, Swich } from 'react-router-dom';

export default class Home extends Component {


    render() {
        return (
            <div>
                <h1>Aviation Info</h1>
                <div>
                    <Link to="/aviationinfo">
                        <button>Plane info</button>
                    </Link>
                </div>
                
            </div>
            
        );
    }
}
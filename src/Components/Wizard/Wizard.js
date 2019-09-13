import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import store, {UPDATE_NAME, UPDATE_ADDRESS, UPDATE_CITY, UPDATE_STATE, UPDATE_ZIP} from '../../store'
import axios from 'axios'

class Wizard extends Component {
    constructor() {
        super()
        this.state = {
            name: store.getState().name,
            address: store.getState().address,
            city: store.getState().city,
            state: store.getState().state,
            zip: store.getState().zip,
            houses: store.getState().houses
        }
    }

    addHouse() {
        axios
        .post("/api/house", {
            name: store.getState().name,
            address: store.getState().address,
            city: store.getState().city,
            state: store.getState().state,
            zip: store.getState().zip
        })
        .then(response => {
            this.setState({
                houses: response.data
            })
        })
    }

    handleName = e => {
        let action = {
            type: UPDATE_NAME,
            payload: e.target.value
        }
        store.dispatch(action)
    
    }
    handleAddress = e => {
        let action = {
            type: UPDATE_ADDRESS,
            payload: e.target.value
        }
        store.dispatch(action)
        
    }
    handleCity = e => {
        let action = {
            type: UPDATE_CITY,
            payload: e.target.value
        }
        store.dispatch(action)
    
    }
    handleState = e => {
        let action = {
            type: UPDATE_STATE,
            payload: e.target.value
        }
        store.dispatch(action)

    }
    handleZipcode = e => {
        let action = {
            type: UPDATE_ZIP,
            payload: e.target.value
        }
        store.dispatch(action)
        console.log(store.getState())
    }

    


    render() {
        return (
            <div>
                <h2>Add New Listing</h2>
                <Link to='/'>
                <button>Cancel</button>
                </Link>
                <h3>Property Name</h3>
                <input onChange ={this.handleName}></input>
                <h3>Address</h3>
                <input onChange ={this.handleAddress}></input>
                <h3>City</h3>
                <input onChange ={this.handleCity}></input>
                <h3>State</h3>
                <input onChange = {this.handleState}></input>
                <h3>Zip</h3>
                <input onChange = {this.handleZipcode}></input>
                <br></br>
                <Link to='/'>
                <button onClick={this.addHouse}>Complete</button>
                </Link>
            </div>
        )
    }
}

export default Wizard
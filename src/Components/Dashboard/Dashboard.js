import React, {Component} from 'react'
import House from '../House/House';
import {Link} from 'react-router-dom'
import axios from 'axios'
import store from '../../store';

class Dashboard extends Component {
    constructor() {
        super()
        this.state = {
            houses: store.getState().houses
        }
    }

    componentDidMount() {
    axios
    .get("/api/houses")
    .then (response => {
        this.setState({
            houses: response.data
        })
    })
    }

    deleteHouse(id) {
        axios
        .delete(`/api/houses/${id}`)
        .then(response => {
            this.setState({
                houses: response.data
            })
        })
    }

    

    render() {
        const {houses} = this.state
        return (
            <div className='housesDiv'>
                <h1>Dashboard</h1>
                <Link to='/wizard'>
                <button>Add new property!</button>
                </Link>
                {houses ? houses.map((el) => (
                    <House 
                    houses={this.houses}
                    name={el.name}
                    address={el.address}
                    city={el.city}
                    state={el.state}
                    zip={el.zip}
                    id={el.id}
                    deleteHouse={this.deleteHouse}
                    />
                    
                )) : <h1>No houses to display</h1>}
                

            </div>
        )
    }
}

export default Dashboard
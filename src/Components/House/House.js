import React, {Component} from 'react'

class House extends Component {
    constructor() {
        super()
    }

    render() {
        return (
            <div className="HouseCard">
                <h3>Property name:<br></br>{this.props.name}</h3>
                <h3>Address:<br></br>{this.props.address}</h3>
                <h3>City:<br></br>{this.props.city}</h3>
                <h3>Zipcode:<br></br>{this.props.zip}</h3>
                <button onClick={this.props.deleteHouse}>Delete</button>
            </div>
        )
    }
}

export default House
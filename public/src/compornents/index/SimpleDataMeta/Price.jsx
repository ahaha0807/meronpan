import React, { Component } from 'react';

class Price extends Component {
    render() {
        return (
            <div className="index__data-meta-price">
                {this.props.price}                
            </div>
        );
    }
}

export default Price;
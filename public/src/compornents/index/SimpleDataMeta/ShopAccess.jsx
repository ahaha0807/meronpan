import React, { Component } from 'react';

class ShopAccess extends Component {
    render() {
        return (
            <div className="index__data-meta-shop-access">
                {this.props.access}
            </div>
        )
    }
}

export default ShopAccess;
import React, { Component } from 'react';

class ShopName extends Component {
    render() {
        return (
            <div className="index__data-meta-shop-name">
                {this.props.shopName}
            </div>
        );
    }
}

export default ShopName;
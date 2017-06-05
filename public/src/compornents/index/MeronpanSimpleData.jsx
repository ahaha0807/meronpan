import React from 'react'
import ShopAccess from './SimpleDataMeta/ShopAccess.jsx'
import Price from './SimpleDataMeta/Price.jsx'
import VisitedDate from './SimpleDataMeta/VisitedDate.jsx'
import ShopName from './SimpleDataMeta/ShopName.jsx'

const MeronpanSimpleData = React.createClass({
  render() {
    return (
      <div className="index__data-meta">
        <ShopAccess access={this.props.shopAccess} />
        <Price price={this.props.price} />
        <VisitedDate visitedDate={this.props.visitedDate} />
        <ShopName shopName={this.props.shopName} />
      </div>
    )
  }
})

module.exports = MeronpanSimpleData
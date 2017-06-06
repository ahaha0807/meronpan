import React from 'react'
import ShopAccess from './ShopAccess.jsx'
import Price from './Price.jsx'
import VisitedDate from './VisitedDate.jsx'
import ShopName from './ShopName.jsx'

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
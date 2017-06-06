import React from 'react'
import MeronpanThumbnail from './MeronpanThumbnail.jsx'
import MeronpanSimpleData from './MeronpanSimpleData.jsx'
// import ShowDetail from './ShowDetail.jsx'

const Meronpan = React.createClass({
  render() {
    return (
      <li className="index__data">
        <MeronpanThumbnail img={this.props.data.image} />
        <MeronpanSimpleData price={this.props.data.price} visitedDate={this.props.data.visitedDate} shopName={this.props.data.shopName} shopAccess={this.props.data.shopAccess}/>
        {/*<ShowDetail id={this.props.meronpanId}/>*/}
      </li>
    );
  }
})

module.exports = Meronpan

/*  @props-doc
 *  {
 *    meronpanId: 1,
 *    image: 'image_url',
 *    price: 100,
 *    visitedDate: '1999-01-01',
 *    shopName: 'shop_name',
 *    shopAccess: 'nearest_station & time_to_shop'
 *  }
 */
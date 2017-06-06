import React from 'react'

const MeronpanThumbail = React.createClass({
  render() {
    {console.log(this.props.img)}
    return (
      <img src={this.props.img} alt="メロンパンの写真" />
    )
  }
})

module.exports = MeronpanThumbail
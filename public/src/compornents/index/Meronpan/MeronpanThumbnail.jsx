import React from 'react'

const MeronpanThumbail = React.createClass({
  render() {
    return (
      <img src={this.props.img} alt="メロンパンの写真" />
    )
  }
})

module.exports = MeronpanThumbail
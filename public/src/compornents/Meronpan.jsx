import React from 'react'

const Meronpan = React.createClass({
  render() {
    return (
      <li className="Meronpan">{this.props.data.price} / {this.props.data.visitedDate}</li>
    );
  }
})

module.exports = Meronpan
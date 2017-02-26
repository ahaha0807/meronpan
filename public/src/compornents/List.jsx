import React from 'react'

const List = React.createClass({
  render() {
    return (
      <div>Hello {this.props.value}</div>
    );
  }
})

module.exports = List;
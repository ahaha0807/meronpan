import React from 'react'

const Pager = React.createClass({
  render() {
    return (
      <div className='index__data-list-pager'>
        {this.props.count}
      </div>
    )
  }
})

module.exports = Pager
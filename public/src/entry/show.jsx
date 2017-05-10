import React from 'react'
import ReactDOM from 'react-dom'
import List from '../compornents/List.jsx'
import Header from '../compornents/common/Header.jsx'

ReactDOM.render(
  <Header />, document.getElementById('header')
)


ReactDOM.render(
  <List value="show"/>, document.getElementById('app-show')
)
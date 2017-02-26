import React from 'react'
import ReactDOM from 'react-dom'
import List from '../compornents/List.jsx'
import Header from '../compornents/Header.jsx'

ReactDOM.render(
  <Header />, document.getElementById('header')
)


ReactDOM.render(
  <List value="create"/>, document.getElementById('app-create')
)
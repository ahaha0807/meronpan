import React from 'react'
import ReactDOM from 'react-dom'
import MeronpanList from '../compornents/index/MeronpanList.jsx'
import Header from '../compornents/common/Header.jsx'

ReactDOM.render(
  <Header />, document.getElementById('header')
)

ReactDOM.render(
  <MeronpanList value="index"/>, document.getElementById('app-index')
)
import React from 'react'
import Meronpan from './Meronpan.jsx'
import NothingMeronpan from './NothingMeronpan.jsx'
import Pager from './Pager.jsx'

const MeronpanList = React.createClass({
  render() {
    if (this.state.dataCount <= 0) {
      return <NothingMeronpan />      
    } else {
      // リストレンダリング
      var meronpans = this.state.dataList.map(data =>{
        return <Meronpan data={data}/>
      })
      if (this.state.dataCount <= 20) {
        // ページャーなし
        return (
          <div className='index__data-list'>
            <ul>{meronpans}</ul>
          </div>
        )
      } else {
        // ページャー付き
        return (
          <div className='index__data-list'>
            <ul>{meronpans}</ul>
            <Pager count={this.state.dataCount}/>
          </div>
        )
      }
    }
  },

  compornentDidMount() {
    this.setState(this.getDataList())
  },

  getInitialState() {
    // 初期値（開発中はテストデータ）
    return {
      dataList: [
        {
          image: '',
          price: 100,
          visitedDate: '1999-01-01',
          shopName: '',
          shopAccess: ''
        },
        {
          image: '',
          price: 200,
          visitedDate: '1999-01-01',
          shopName: '',
          shopAccess: ''
        }
      ],
      dataCount: 21
    }
  },

  // コンポーネント用関数
  getDataList() {
    // APIからデータ取得
  }
})

module.exports = MeronpanList;
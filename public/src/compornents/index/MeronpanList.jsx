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

      // ページャー追加
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
          meronpanId: 1,
          image: 'sample_1.png',
          price: 100,
          visitedDate: '1999-01-01',
          shopName: 'hogehogeパン屋',
          shopAccess: 'JR大阪駅から10分'
        },
        {
          merinpanId: 2,
          image: 'sample_2.png',
          price: 200,
          visitedDate: '1999-01-01',
          shopName: 'ブレッドfugafuga',
          shopAccess: '谷町線梅田駅から約5分'
        },
      ],
      dataCount: 2
    }
  },

  // コンポーネント用関数
  getDataList() {
    // APIからデータ取得
  }
})

module.exports = MeronpanList;
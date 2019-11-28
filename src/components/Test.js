import React, {Component } from 'react'
import { toJS } from 'mobx'
import { observer, inject } from 'mobx-react';
import { Button } from 'antd'
import PropTypes from 'prop-types';

@inject('test')
@observer
class Test extends Component {

  constructor(props){
    super(props)
  }

  addData = () => {
    const { test: { addData }} = this.props;
    addData();
  }

  render () {
    const { test: { dataList }} = this.props;
    console.log(toJS(dataList))
    return (
      <div>
        <h1><Button onClick={this.addData}>添加数据</Button> </h1>
        <div>
          {
            dataList.map((item,index) =><h1 key={index}>{item.name}</h1> )
          }
        </div>
      </div>
    )
  }
}
// propTypes 对数据进行验证
Test.propTypes = {
  test: PropTypes.object
}
export default Test

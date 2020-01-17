import React, { useState, useEffect, useContext } from 'react';
import { inject, observer } from 'mobx-react';

import { Button } from 'antd'

// #region  useContext的例子
const themes = {
  light: {
    foreground: '#000000',
    background: '#eeeeee'
  },
  dark: {
    foreground: '#ffffff',
    background: '#222222'
  }
};

const ThemeContext = React.createContext(themes.light);

function MiddleWare() {
  return (
    <ThemeContext.Provider value={themes.dark}>
      <Toolbar />
    </ThemeContext.Provider>
  );
}

// eslint-disable-next-line no-unused-vars
function Toolbar(props) {
  return (
    <div>
      <ThemedButton />
    </div>
  );
}

function ThemedButton() {
  const theme = useContext(ThemeContext);

  return (
    <button style={{ background: theme.background, color: theme.foreground }}>
      I am styled by theme context!
    </button>
  );
}
// #endregion

const HookIndex = inject('hook')(observer(({
  hook: {
    // data
    dataList,
    userList,
    // action
    addData,
    // getUserList,
  }
}) => {

  // 本地 states
  const [count, setcount] = useState(0);
  const [name, setName] = useState('sss');
  const randoms = () => (
    (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1)
  );

  // render之后执行
  useEffect(() => {
    console.log('render完毕');
    console.log(`${randoms()}${randoms()}-${randoms()}-${randoms()}-${randoms()}-${randoms()}${randoms()}${randoms()}`);
  })

  // name 变化 之后执行
  useEffect(() => {
    console.log('name 变化: ', name)
  }, [name])

  // rcount 变化 之后执行
  useEffect(() => {
    console.log('count 变化: ', count)
  }, [count])

  // componenntDidMount 只执行一次
  useEffect(() => {
    console.log('componenntDidMount完毕')
  },[])

  function alertNumber(){
    console.log('function  count: ', count);
  }

  // setEffect 的欺骗问题
  const [fins, setFins] = useState(0);
  useEffect(() => {
    const id = setInterval(() => {
      setFins(fins + 1);
      console.log('fins:',fins)
    }, 1000);
    return () => clearInterval(id);
  }, []); // 你的关注点在这里 解决办法：添加以来监控【fins】

  return (
    <div>
      <h1>
        hook
      </h1>
      <p>count : { count} <Button type="primary" onClick={()=>{setcount(count+1)}}>count+1</Button>
        <Button onClick={alertNumber}>打印count</Button>
      </p>
      <p>name : { name} <Button type="primary" onClick={()=>{setName('dddd')}}>setName</Button>
      </p>
      <p>mobx-datalist : <Button type="primary" onClick={()=>{addData()}}>addData</Button></p>
      <div>
        {
          dataList.map(({ name, age }, index) => {
            return <p key={index}>name: {name},age:{age}</p>
          })
        }
      </div>
      <p>mobx-getUserList:</p>
      <div>
        {
          userList.map(({ name, age }, index) => {
            return <p key={index}> name: {name}, age: {age}</p>
          })
        }
      </div>
      <p>useContext:</p>
      <MiddleWare />
      <p>setEffect的欺骗问题： fins：{fins}</p>
    </div>
  );
}));


export default HookIndex;


// 每一个 useReducer 都能记住该操作，在下一个渲染钱读取 props 新的 props 将在作用域内
// useReducer 视为 hook 的欺骗模式，



// useEffect的设计迫使我们注意数据流中数据的变化，而不是使用【】数组去忽略 bug


// 当某个函数不以来效果的时候，可以将其提升到该组件外部，让其单独存在
// 使用 useCallback 函数完全可以参与数据流


// hook 就是一个闭包，他没有自己的 state 只是由于每次渲染，他都有一个变量来预先定义



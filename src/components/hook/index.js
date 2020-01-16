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

  // render之后执行
  useEffect(() => {
    console.log('render完毕')
  })

  // rcount 变化 之后执行
  useEffect(() => {
    console.log('count 变化')
  }, [count])

  // componenntDidMount 只执行一次
  useEffect(() => {
    console.log('componenntDidMount完毕')
  },[])

  // useContext 解决多层嵌套 props 的问题

  return (
    <div>
      <h1>
        hook
      </h1>
      <p>count : { count} <Button type="primary" onClick={()=>{setcount(count+1)}}>count+1</Button></p>
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
    </div>
  );
}));


export default HookIndex;


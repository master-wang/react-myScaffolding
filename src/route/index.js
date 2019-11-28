import React from 'react';
const home = () => {
  return (
    <div>
      1111
    </div>
  );
}


export default {
  path: '/',
  icon: '/',
  name: '首页',
  component: home,
  img: { src: '' },
  exact: true,
  hideChildrenInMenu: true,
  routes: [
    {
      path: '/bout',
      icon: 'bout',
      name: '关于',
      component: home,
      img: { src: '' },
      exact: true,
      hideChildrenInMenu: true,
    }
  ]
}

import { extendObservable, action, runInAction } from 'mobx';

const OBSERVABLE = {
  dataList: [
    {
      name: 'aaa',
      age: '10'
    },
    {
      name: 'sss',
      age: '20'
    }
  ],
  userList: []
};

class Hook {
  constructor() {
    extendObservable(this, {
      ...OBSERVABLE
    });
  }

  @action.bound addData() {
    runInAction(()=>{
      this.dataList.push({name: 'sss', age: 30})
    })
  }

  @action.bound getUserList(){
    runInAction(()=>{
      this.userList=[
        { name: 'sdjd', age: 15},
        { name: 'sdud', age: 6},
        { name: 'sdyd', age: 7},
        { name: 'sdtd', age: 8},
        { name: 'sdrd', age: 9},
      ]
    })
  }
}

export default new Hook();

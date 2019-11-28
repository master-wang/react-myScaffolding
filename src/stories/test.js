import { action, extendObservable, runInAction } from 'mobx';
// runInAction
// 可观察属性
const OBSERVABLE = {
  dataList: [
    {
      name: 'wang',
      age: 'sds'
    },
    {
      name: 'zhi',
      age: '20'
    }
  ]
};

class Test {
  constructor() {
    extendObservable(this, {
      ...OBSERVABLE
    });
  }
  @action.bound update (obj) {
    Object.assign(this,obj)
  }

  @action.bound getDataList () {
    return this.dataList;
  }

  @action.bound addData(){
    const params = {
      name: String(new Date()),
      age: 20
    }
    runInAction(()=>{
      this.dataList.push(params)
    })
  }
}

export default new Test();

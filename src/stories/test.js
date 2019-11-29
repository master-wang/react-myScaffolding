import { action, extendObservable, runInAction } from 'mobx';

import * as api from '../services/test';
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
  ],
  weatherList: []
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

  @action.bound async getWeatherData(){
    try {
      const datalist = await api.getWeaterInfo({version: 'v1', city: '北京'});
      console.log(datalist)
      runInAction(() => {
        this.weatherList = datalist
      })
    } catch (err) {
      console.log(err)
    }
  }
}

export default new Test();

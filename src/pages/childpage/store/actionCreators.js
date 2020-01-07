import { CHILDPAGE_STATE } from './actionTypes';
// 这里需要用immutable，原因是home的reducer初始化数据就是immutable对象
import { fromJS } from 'immutable';
import axios from 'axios';

// 异步获取数据
export const changeChildPageState = (data) => {
  return {
    type: CHILDPAGE_STATE,
    data: fromJS(data)
  }
}

export const asyncGet = () => {
  return (dispatch, getState) => {
    // axios.get('/list.json').then((res) => {
	// 		console.log(res);
	// 		const data = res.data;
			const action = changeChildPageState('改变child-state');
			dispatch(action);
		// }).catch((error) => {
		// 	console.log(error)
		// })
  }
}

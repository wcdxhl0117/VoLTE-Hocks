import { HEADER_STATE } from './actionTypes';
// 这里需要用immutable，原因是home的reducer初始化数据就是immutable对象
import { fromJS } from 'immutable';
import axios from 'axios';

// 异步获取数据
export const changeHeaderState = (data) => {
  return {
    type: HEADER_STATE,
    data: fromJS(data)
  }
}

export const asyncGet = () => {
  return (dispatch, getState) => {
    // axios.get('/list.json').then((res) => {
	// 		console.log(res);
	// 		const data = res.data;
			const action = changeHeaderState('改变header-state');
			dispatch(action);
		// }).catch((error) => {
		// 	console.log(error)
		// })
  }
}

import { HOME_STATE } from './actionTypes';
// 这里需要用immutable，原因是home的reducer初始化数据就是immutable对象
import { fromJS } from 'immutable';
import axios from 'axios';

// 异步获取数据
export const changeHomeState = (data) => {
  return {
    type: HOME_STATE,
    data: fromJS(data)
  }
}

export const asyncGet = () => {
  return (dispatch, getState) => {
    axios.get('/ycorrect/user/login?username=七八九九&password=123456').then((res) => {
			const data = res.data;
			const action = changeHomeState(data.ret_msg);
			dispatch(action);
		}).catch((error) => {
			console.log(error)
		})
  }
}

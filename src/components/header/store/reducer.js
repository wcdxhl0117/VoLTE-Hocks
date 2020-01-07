import { HEADER_STATE } from './actionTypes';
import { fromJS } from 'immutable';
// state默认值
const defaultState = fromJS({
	header_state: 'header组件的的reducer'
})

export default (state = defaultState, action) => {
	if (action.type === HEADER_STATE) {
		// console.log('header-reducer')
		// const newState = JSON.parse(JSON.stringify(state));
		// newState.header_state = action.data;
		// return newState;
		return state.set('header_state', action.data);
	}

	return state;
}

import { CHILDPAGE_STATE } from './actionTypes';
import { fromJS } from 'immutable';
// state默认值
const defaultState = fromJS({
	childpage_state: '子页面reducer'
})

export default (state = defaultState, action) => {
	if (action.type === CHILDPAGE_STATE) {
		// console.log('childpage-reducer')
		// const newState = JSON.parse(JSON.stringify(state));
		// newState.childpage_state = action.data;
		// return newState;
		return state.set('childpage_state', action.data);
	}

	return state;
}

import { HOME_STATE } from './actionTypes';
import { fromJS } from 'immutable';
// state默认值
const defaultState = fromJS({
	home_state: '111111'
})

export default (state = defaultState, action) => {
	if (action.type === HOME_STATE) {
		console.log('home-reducer')
		// const newState = JSON.parse(JSON.stringify(state));
		// newState.home_state = action.data;
		// return newState;
		return state.set('home_state', action.data);
	}

	return state;
}

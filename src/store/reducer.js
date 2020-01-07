// 这里用redux-immutabl，不用redux的combineReducers，因为子reducer有又到immutable，保持统一,不然会报错哈
import { combineReducers } from 'redux-immutable';
import { reducer as headerReducer } from '../components/header/store';
import { reducer as homeReducer } from '../pages/home/store';
import { reducer as childpageReducer } from '../pages/childpage/store';

const reducer = combineReducers({
	header: headerReducer,
	home: homeReducer,
	childpage: childpageReducer
});

export default reducer;

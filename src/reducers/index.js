import { combineReducers } from "redux";
import headlineReducer from './headlineReducer';
import pricesReducer from './pricesReducer';

export default combineReducers({
	headlineReducer,
	pricesReducer
});

import { combineReducers } from "redux";
import headlineReducer from './headlineReducer';
import priceReducer from './priceReducer';
import articleReducer from './articleReducer';

export default combineReducers({
	headlineReducer,
	priceReducer,
	articleReducer
});

import { combineReducers } from "redux";
import headlineReducer from './headlineReducer';
import priceReducer from './priceReducer';
import articleReducer from './articleReducer';
import newsSourceReducer from './newsSourceReducer';

export default combineReducers({
	headlineReducer,
	priceReducer,
	articleReducer,
	newsSourceReducer
});

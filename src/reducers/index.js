import { combineReducers } from "redux";
import headlineReducer from './headlineReducer';
import priceReducer from './priceReducer';
import articleReducer from './articleReducer';
import newsSourceReducer from './newsSourceReducer';
import graphReducer from './graphReducer';

export default combineReducers({
	headlineReducer,
	priceReducer,
	articleReducer,
	newsSourceReducer,
	graphReducer
});

const defaultState = {
	graphData: []
};

export const graphReducer = (state = defaultState, action) => {

	switch (action.type) {

	case "GET_GRAPH_DATA_PENDING":
		return {
			...state,
			getGraphDataPending: true
		};

	case "GET_GRAPH_DATA_SUCCESS":
		return {
			...state,
			graphData: action.graphData,
			getGraphDataError: false,
			getGraphDataPending: false
		};

	case "GET_GRAPH_DATA_ERROR":
		return {
			...state,
			getGraphDataError: true,
			getGraphDataPending: false
		};

	default:
		return state;
	}

};

export default graphReducer;

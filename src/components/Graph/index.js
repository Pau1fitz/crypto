import Graph from './Graph.js';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getGraphData } from '../../actions/graphActions';

const mapStateToProps = (state) => {

	return {
		data: state.graphReducer.graphData
	};

};

const mapDispatchToProps = dispatch => {

	return bindActionCreators({
		getGraphData
	},dispatch);

};

export default connect(mapStateToProps, mapDispatchToProps)(Graph);

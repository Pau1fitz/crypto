import NewsSourcePage from "./NewsSourcePage";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getNewsSources } from '../../actions/newsSourceActions';


const mapStateToProps = () => {

	return {

	};

};

const mapDispatchToProps = dispatch => {

	return bindActionCreators({
		getNewsSources
	},dispatch);

};

export default connect(mapStateToProps, mapDispatchToProps)(NewsSourcePage);

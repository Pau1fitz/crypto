import CurrencyPage from "./CurrencyPage";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getPopularArticles, getRecentArticles } from '../../actions/articleActions';


const mapStateToProps = (state) => {

	return {
		headlines: state.headlineReducer.headlines,
		prices: state.priceReducer.prices,
		mainArticle: state.articleReducer.mainArticle,
		popularArticles: state.articleReducer.popularArticles,
		recentArticles: state.articleReducer.recentArticles
	};

};

const mapDispatchToProps = dispatch => {

	return bindActionCreators({
		getPopularArticles,
		getRecentArticles
	},dispatch);

};

export default connect(mapStateToProps, mapDispatchToProps)(CurrencyPage);

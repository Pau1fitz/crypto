import React, { Component } from 'react';
import PropTypes from 'prop-types';

class NewsSourcePage extends Component {

	componentDidMount() {
		this.props.getNewsSources();
	}

	render () {


		return(
			<div>
				<p>hi</p>
			</div>
		);

	}
};

NewsSourcePage.propTypes = {
	getNewsSources: PropTypes.func
};

export default NewsSourcePage;

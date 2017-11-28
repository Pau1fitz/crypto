import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getHeadlines } from './actions/headlineActions';
import './App.css';

// components
import Ticker from './components/Ticker';

class App extends Component {

	componentDidMount() {
		this.props.getHeadlines();
	}

	render() {
		return (
			<div className="App">
				<Ticker headlines={ this.props.headlines } />
			</div>
		);
	}
}


const mapStateToProps = (state) => {

	return {
		headlines: state.headlineReducer.headlines
	};

};

const mapDispatchToProps = dispatch => {

	return bindActionCreators({
		getHeadlines
	},dispatch);

};

App.propTypes = {
	getHeadlines: PropTypes.func,
	headlines: PropTypes.array
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

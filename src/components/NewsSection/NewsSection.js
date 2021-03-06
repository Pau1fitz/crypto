import React, { Component } from 'react';
import PropTypes from 'prop-types';
import NewsItem from '../NewsItem';
import './NewsSection.css';

class NewsSection extends Component {

	state = {
		numberItemsDisplay: 3
	};

	showMoreItems = () => {
		this.setState((prevState) => {
			return {
				numberItemsDisplay: prevState.numberItemsDisplay + 3
			};
		});
	}

	render() {

		const { numberItemsDisplay } = this.state;
		const { articles, title } = this.props;

		let articleList = articles.map((article, index) => {

			if(index < numberItemsDisplay){
				return (
					<NewsItem article={article} key={article.url} />
				);
			}
		});

		return (

			<div>

				{articles && (
					<div className='main-news-section'>
						<h2 className='section-title'>{ title }</h2>
						<ul className='main-news-container'>
							{ articleList }
						</ul>

						<p style={numberItemsDisplay === articles.length ?  { display: 'none' } : { display: 'inline-block' }} className='show-more' onClick={ this.showMoreItems }>Show more</p>
					</div>

				)}
			</div>

		);

	}
}

NewsSection.propTypes = {
	articles: PropTypes.array,
	title: PropTypes.string
};

export default NewsSection;

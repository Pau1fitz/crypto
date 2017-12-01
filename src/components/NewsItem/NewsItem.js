import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './NewsItem.css';

class NewsItem extends Component {

	addDefaultImg = (ev)  => {
		ev.target.src = 'https://tctechcrunch2011.files.wordpress.com/2014/02/bitcoin-perfecthue.jpg';
	}

	render() {

		const { article } = this.props;

		const image = article.urlToImage;

		return (
			<li className='main-news-item'>
				<div className='image-container'>
					<img onError={this.addDefaultImg} src={ image } alt='article-image' />
				</div>
				<a href={ article.url }>
					<p className='title-text'>{ article.title  }</p>
				</a>
			</li>
		);
	}

};

NewsItem.propTypes = {
	article: PropTypes.object
};

export default NewsItem;

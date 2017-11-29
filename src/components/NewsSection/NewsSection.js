import React from 'react';
import PropTypes from 'prop-types';
import './NewsSection.css';

const NewsSection = ({ articles }) => {

	let articleList = articles.map(article => {
		return (
			<li className='main-news-item' key={article.publishedAt}>
				<div className='image-container'>
					<img src={ article.urlToImage } alt='article-image' />
				</div>
				<p className='title-text'>{ article.title }</p>
			</li>
		);
	});

	return (

		<div>

			{articles && (

				<div className='main-news-section'>

					<ul className='main-news-container'>
						{ articleList }
					</ul>


				</div>
			)}
		</div>


	);
};

NewsSection.propTypes = {
	articles: PropTypes.array
};

export default NewsSection;

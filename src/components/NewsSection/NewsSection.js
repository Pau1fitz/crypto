import React from 'react';
import PropTypes from 'prop-types';
import './NewsSection.css';

const NewsSection = ({ articles }) => {

	let articleList = articles.map(article => {
		return (
			<li className='main-news-item' key={article.publishedAt}>
				<a href={ article.url }>
					<div className='image-container'>
						<img src={ article.urlToImage } alt='article-image' />
					</div>
					<p className='title-text'>{ article.title }</p>
				</a>
			</li>
		);
	});

	return (

		<div>

			{articles && (

				<div className='main-news-section'>

					<h2 className='section-title'>Headlines</h2>

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

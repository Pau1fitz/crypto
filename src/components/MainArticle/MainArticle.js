import React from 'react';
import './MainArticle.css';

const MainArticle = ({ article }) => {

	return (

		<div>

			{article && (

				<div className='main-article-container'>
					<a href={ article.url }>
						<div style={{backgroundImage: `url(${article.urlToImage})`}} className='main-image'>
							<p className='article-title'>{ article.title }</p>
						</div>
						<div className='article-info'>
							<p className='article-author'>by { article.author }</p>
							<p className='artice-description'>{ article.description }</p>
						</div>
					</a>
				</div>
			)}
		</div>


	);
};

export default MainArticle;

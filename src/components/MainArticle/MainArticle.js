import React from 'react';
import PropTypes from 'prop-types';
import './MainArticle.css';

const MainArticle = ({ mainArticle }) => {

	return (

		<div>

			{mainArticle && (

				<div className='main-article-container'>

					<h2 className='section-title'>Top Story</h2>

					<a href={ mainArticle.url }>
						<div style={{backgroundImage: `url(${mainArticle.urlToImage})`}} className='main-image'>
							<p className='article-title'>{ mainArticle.title }</p>
						</div>
						<div className='article-info'>
							<p className='article-author'>by { mainArticle.author }</p>
							<p className='artice-description'>{ mainArticle.description }</p>
						</div>
					</a>
				</div>
			)}
		</div>


	);
};

MainArticle.propTypes = {
	mainArticle: PropTypes.object
};

export default MainArticle;

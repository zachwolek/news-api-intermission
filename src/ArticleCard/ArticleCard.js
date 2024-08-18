import './ArticleCard.css'
import { Link } from 'react-router-dom' 

export const ArticleCard = ({author, title, urlToImage, description, publishedAt, handleArticle}) => {

    return (
        <div className='article-card'>
            <div className='info-card'>
                <h3 className='title-card'>{title}</h3>
                <p>By: {author}</p>
                <p className='date-card'>{publishedAt}</p>
                <p className='description-card'>{description ? description : 'No description available. Click below for more info!'}</p>
            </div>
            <div className='image-card'>
                <img src={urlToImage? urlToImage: `https://i.imgur.com/fck32DI.jpeg`} alt={`Image for ${title}`} />
            </div>
            <div className='button-container'>
                <Link to={`/singleview/${title}`}>
                    <button className='button' 
                        onClick = {() => handleArticle(title)}
                    >
                            More Info
                    </button>
                </Link>
            </div>
        </div>
    )
}
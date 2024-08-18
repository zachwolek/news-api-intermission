import './ArticleCard.css'

export const ArticleCard = ({author, title, urlToImage, description, publishedAt}) => {

    return (
        <div className='article-card'>
            <div className='info-card'>
                <h3 className='title-card'>{title}</h3>
                <p className='date-card'>{publishedAt}</p>
                <p className='description-card'>{description ? description : 'No description available. Click for more info!'}</p>
            </div>
            <div className='image-card'>
                <img src={urlToImage} alt={`Image for ${title}`} />
            </div>
            <button>More Info</button>
        </div>
    )
}
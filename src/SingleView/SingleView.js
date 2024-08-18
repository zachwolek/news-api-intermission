import './SingleView.css';
import { ErrorPage } from '../ErrorPage/ErrorPage';
import { Link } from 'react-router-dom'

export const SingleView = ({articles, singleViewTitle}) => {
    const singleArticle = articles.find(article => article.title === singleViewTitle)
    console.log("SINGLE ARTICLE: ", singleArticle)

    if (!singleArticle){
        return (
            <>
                <ErrorPage />
            </>
        )
    } 

    const { author, content, description, publishedAt, source, title, url, urlToImage } = singleArticle
    return (
        <div className='single-view-page'>
            <div className='single-view-container'>
                <div className='article-info'>
                    <h2>{title}</h2>
                    <h3>{author}</h3>
                    <img src={urlToImage? urlToImage : `https://i.imgur.com/O1IxuvB.jpg`}/>
                    <p>{publishedAt}</p>
                    <p>By: {source.name}</p>
                    <p>{content}</p>
                    <div className='external-link'>
                        <a href={url}>
                            Click to see full article!
                        </a>
                    </div>
                </div>
                <Link to={`/`} className='button-container'>
                    <button>
                        Return Home
                    </button>
                </Link>
            </div>  
        </div> 
    )
}

//(headline, image, date, content, source)
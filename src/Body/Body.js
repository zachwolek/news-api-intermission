import { ArticleCard } from '../ArticleCard/ArticleCard'
import { Form } from '../Form/Form'
import { Link } from 'react-router-dom'
import './Body.css'

export const Body = ({articles, handleArticle, author, handleAuthor, setAuthor, resetArticles}) => {
console.log("ARTICLES: ", articles)

    const allArticles = articles.map(article => {
        return (<ArticleCard 
                    author={article.author}
                    title={article.title}
                    urlToImage={article.urlToImage}
                    description={article.description}
                    publishedAt={article.publishedAt}
                    handleArticle={handleArticle}
                />
        )
    })

    return(
        <div className='body'>
            {author? <div></div> : <Form className='form' handleAuthor={handleAuthor}/>}
            {author? 
              <div className='search-result'>
                <p>Showing Results for <em>{author}</em></p>
                <Link to={`/`} className='button-container' 
                onClick={() => {
                    setAuthor('')
                    resetArticles()
                    }
                  }>
                  <h3>Please Return Home</h3>
                </Link>
              </div> : <></>}
            <div className='all-articles-body'>
            {allArticles}
            </div>
        </div>
    )
}
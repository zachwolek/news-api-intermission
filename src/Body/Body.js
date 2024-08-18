import { ArticleCard } from '../ArticleCard/ArticleCard'
import { Form } from '../Form/Form'
import { Link } from 'react-router-dom'
import './Body.css'

export const Body = ({articles, handleArticle, author, handlePhrase, setPhrase, resetArticles, phrase}) => {
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
            {phrase? <div></div> : <Form className='form' handlePhrase={handlePhrase}/>}
            {phrase? 
              <div className='search-result'>
                <p>Showing Results for <em>{phrase}</em></p>
                <Link to={`/`} className='button-container' 
                onClick={() => {
                    setPhrase('')
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
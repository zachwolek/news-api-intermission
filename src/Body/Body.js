import { ArticleCard } from '../ArticleCard/ArticleCard'
import './Body.css'

export const Body = ({articles}) => {
console.log("ARTICLES: ", articles)
console.log("ARTICLE THREE :", articles[3])
console.log("LENGTH: ", articles.length)


    const allArticles = articles.map(article => {
        return (<ArticleCard 
                    author={article.author}
                    title={article.title}
                    urlToImage={article.urlToImage}
                    description={article.description}
                    publishedAt={article.publishedAt}
                />
        )
    })

    return(
        <div>{allArticles}</div>
    )
}
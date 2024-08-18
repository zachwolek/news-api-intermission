import { useState, useEffect} from 'react' 
import { Body } from '../Body/Body'
import { Header } from '../Header/Header'
import { SingleView } from '../SingleView/SingleView';
import { ErrorPage } from '../ErrorPage/ErrorPage';
import { Form } from '../Form/Form'
import { getArticles } from '../APICalls';
import { mockArticles } from '../MockArticles';
import { Routes, Route, Link } from 'react-router-dom'

import './App.css';

function App() {
const [articles, setArticles] = useState([])
const [singleViewTitle, setSingleViewTitle] = useState('')
const [author, setAuthor] = useState('')

const handleArticle = (title) => {
  setSingleViewTitle('')
  setSingleViewTitle(title)
  console.log("CURRENT TITLE: ", title)
}

const handleAuthor = (author) => {
  setAuthor(author)
  const filteredArticles = articles.filter(article => article.author === author)
  setArticles(filteredArticles)
}

const resetArticles = () => {
  setArticles(mockArticles.articles)
}

useEffect(() => {
  getArticles()
  .then((result) => setArticles(result.articles))
}, [])
 
  return (
    <div className="App">
      <Header handleAuthor={handleAuthor}/>
      <Routes>
        <Route path='/'
          element={
              <Body articles={articles} 
                    handleArticle={handleArticle}
                    author={author}
                    handleAuthor={handleAuthor}
                    setAuthor={setAuthor}
                    resetArticles={resetArticles}
              />
          }
        />
        <Route path='/singleview/:title'
          element={<SingleView articles={articles} singleViewTitle={singleViewTitle}/>}
        />
        <Route path='*'
          element={<ErrorPage />}
        />
      </Routes>
    </div>
  );
}

export default App;

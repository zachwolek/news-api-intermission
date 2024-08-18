import { useState, useEffect} from 'react' 
import { Body } from '../Body/Body'
import { Header } from '../Header/Header'
import { SingleView } from '../SingleView/SingleView';
import { ErrorPage } from '../ErrorPage/ErrorPage';
import { Form } from '../Form/Form'
import { getArticles, getEverythingArticles } from '../APICalls';
import { mockEverythingArticles } from '../MockEverything'
import { mockArticles } from '../MockArticles';
import { Routes, Route, Link } from 'react-router-dom'

import './App.css';

function App() {
const [articles, setArticles] = useState([])
const [singleViewTitle, setSingleViewTitle] = useState('')
const [phrase, setPhrase] = useState('')

const handleArticle = (title) => {
  setSingleViewTitle('')
  setSingleViewTitle(title)
  console.log("CURRENT TITLE: ", title)
}

const handlePhrase = (phrase) => {
  setPhrase(phrase)
  const filteredArticles = articles.filter(article => article.content.includes(phrase))
  setArticles(filteredArticles)
}

const resetArticles = () => {
  getEverythingArticles()
    .then((result) => setArticles(result.articles))
}

useEffect(() => {
  getEverythingArticles()
  .then((result) => setArticles(result.articles))
}, [])
 
  return (
    <div className="App">
      <Header handlePhrase={handlePhrase}/>
      <Routes>
        <Route path='/'
          element={
              <Body articles={articles} 
                    handleArticle={handleArticle}
                    phrase={phrase}
                    handlePhrase={handlePhrase}
                    setPhrase={setPhrase}
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

import { useState, useEffect} from 'react' 
import { Body } from '../Body/Body'
import { Header } from '../Header/Header'
import { getArticles } from '../APICalls';
import { mockArticles } from '../MockArticles';

import './App.css';

function App() {
const [articles, setArticles] = useState(mockArticles.articles)

// useEffect(() => {
//   getArticles()
//   .then((result) => setArticles(result.articles))
// })
 
  return (
    <div className="App">
      <Header />
      <Body articles={articles}/>
    </div>
  );
}

export default App;

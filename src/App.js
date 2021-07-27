import axios from 'axios';
import { useEffect, useState } from 'react';
import Search from './components/Search';
import './index.css';

function App() {
  const [hackerNews, setNews] = useState([]);

  useEffect(() => {
    axios.get('http://hn.algolia.com/api/v1/search?tags=front_page')
    .then(data => setNews(data.data.hits))
    .catch(err => err)
  }, [])

  const [sortData, setFilter] = useState('');
  
  // eslint-disable-next-line  
  const filteredNews = hackerNews?.filter( news =>{
		if(sortData === null)
			return news
      if(news?.title.toLowerCase().includes(sortData.toLowerCase())||news?.author.toLowerCase().includes(sortData.toLowerCase())){
        return news
      }
	  })

  return (
    <div className="App">
      <h2>Hacker News Stories</h2>
      <div>
        <Search 
        filteredNews={filteredNews}
        setFilter={setFilter}
        />
      </div>
    </div>
  );
}

export default App;

import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import NavInshort from "./components/NavInshort";
import NewsContent from "./components/NewsContent/NewsContent";
import Footer from "./components/Footer";

function App() {
  const [category, setCategory] = useState("general");
  const [newsArray, setNewsArray] = useState([]);
  const [newsResults, setNewsResults] = useState([]);
  const [loadmore, setLoadmore] = useState(20); // display 20 news

  const newsApi = async () => {
    try {
      const apiKey = process.env.REACT_APP_API_KEY;
      const news = await axios.get(
        `/api/v2/top-headlines?country=us&category=${category}&apiKey=${apiKey}`
      );
      setNewsArray(news.data.articles);
      setNewsResults(news.data.totalResults);
    } catch (error) {
      console.log("Error fetching news:", error);
    }
  };

  // Used when newsResults or category is going to change
  useEffect(() => {
    newsApi();
    // eslint-disable-next-line
  }, [category, loadmore]);

  return (
    <div className="App">
      <NavInshort setCategory={setCategory} />
      {newsResults && (
        <NewsContent
          setLoadmore={setLoadmore}
          loadmore={loadmore}
          newsArray={newsArray}
          newsResults={newsResults}
        />
      )}
      <Footer />
    </div>
  );
}

export default App;

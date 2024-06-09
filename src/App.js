import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import NavInshort from "./components/NavInshort";
import NewsContent from "./components/NewsContent/NewsContent";
import apikey from "./data/config";

function App() {
  const [category, setCategory] = useState("general");
  const [newsArray, setNewsArray] = useState([]);
  const [newsResults, setNewsResults] = useState([]);

  const newsApi = async () => {
    try {
      const news = await axios.get(
        `https://newsapi.org/v2/top-headlines?country=in&apiKey=${apikey}&category=${category}`
      );
      setNewsArray(news.data.articles);
      setNewsResults(news.data.totalResults);
      //console.log(news.data.articles);
    } catch (error) {
      console.log("Error fetching news:", error);
    }
  };

  console.log(newsArray);

  //Used when newsresults or category is going to change
  useEffect(() => {
    newsApi();
  }, [newsResults, category]);

  return (
    <div className="App">
      <NavInshort setCategory={setCategory} />
      <NewsContent />
    </div>
  );
}

export default App;

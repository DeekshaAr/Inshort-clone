import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import NavInshort from "./components/NavInshort";
import NewsContent from "./components/NewsContent/NewsContent";
import apikey from "./data/config";
import Footer from "./components/Footer";

function App() {
  const [category, setCategory] = useState("general");
  const [newsArray, setNewsArray] = useState([]);
  const [newsResults, setNewsResults] = useState([]);
  const [loadmore, setLoadmore] = useState(20); //display 20 news

  const newsApi = async () => {
    try {
      const proxyUrl = "https://cors-anywhere.herokuapp.com/";
      const news = await axios.get(
        `https://${proxyUrl}newsapi.org/v2/top-headlines?country=in&apiKey=${apikey}&category=${category}&pageSize=${loadmore}`
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
    //eslint-disable-next-line
  }, [newsResults, category, loadmore]);

  return (
    <div className="App">
      <NavInshort setCategory={setCategory} />
      <NewsContent
        setLoadmore={setLoadmore}
        loadmore={loadmore}
        newsArray={newsArray}
        newsResults={newsResults}
      />
      <Footer />
    </div>
  );
}

export default App;

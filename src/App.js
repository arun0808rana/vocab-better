import logo from "./logo.svg";
import "./App.css";
import Pagination from "./Pagination";
import ShowMeaning from "./ShowMeaning";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

function App() {
  const [wordListEndpoint, setWordListEndpoint] = useState(
    "http://localhost:8080/"
  );
  const [state, setstate] = useState(false);
  const [currentPage, setCurrentPage] = useState(
    localStorage.getItem("currentPage") || 1
  );

  const [meaningURL, setmeaningURL] = useState(
    "https://api.dictionaryapi.dev/api/v2/entries/en/"
  );
  const [wordsArray, setwordsArray] = useState([]);
  const [meaningsArray, setmeaningsArray] = useState([]);

  const showMeaningsArray = () => {
    console.log(meaningsArray, "meaningsArray");
  };

  const onPaginate = (currPage) => {
    setCurrentPage(currPage);
    localStorage.settItem("currentPage", currPage);
  };

  useEffect(() => {
    axios
      .get(wordListEndpoint, { params: { page: currentPage } })
      .then((res) => {
        setwordsArray((prevState) => [...prevState, res.data]);
        wordsArray.forEach((word, index) => {
          axios.get(meaningURL + word).then((res) => {
            setmeaningsArray((prevState) => [...prevState, res.data]);
          });
        });
      });
  }, [currentPage]);

  return (
    <div className="App">
      <h1 onClick={showMeaningsArray}>VOCAB-BETTER</h1>
      <div className="show-meaning-toggle">
        <div className="text">Expand All Meanings</div>
        <ShowMeaning state={state} setstate={setstate} />
      </div>

      <div className="card">
        {[1, 2, 3, 4, 5].map((word, index) => {
          return (
            <details className="warning" open={state} key={`word-section-${index}`}>
              <summary>Facts and knowledge about COVID-19</summary>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Provident beatae amet voluptatem quae esse, illum omnis
                dignissimos voluptas quidem quasi ipsum tempore facilis eos,
                veritatis officiis, quo ipsam nam aspernatur.
              </p>
            </details>
          );
        })}
      </div>

      <Pagination />
    </div>
  );
}

export default App;

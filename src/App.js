import logo from "./logo.svg";
import "./App.css";
import Pagination from "./Pagination";
import ShowMeaning from "./ShowMeaning";
import react, { useState } from "react";
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
    // console.log(meaningsArray, "meaningsArray");
  };

  const onPaginate = (currPage) => {
    setCurrentPage(currPage);
    localStorage.settItem("currentPage", currPage);
  };

  useEffect(() => {
    (async () => {
      for (let word of Array.from(wordsArray)) {
        try {
          const res = await axios.get(meaningURL + word);
          setmeaningsArray((prevState) => [...prevState, res.data])
        } catch (err) {
          // console.log('hmm', err);
          // throw err;
        }
      }
    })()
  }, [wordsArray]);

  useEffect(() => {
    console.log(meaningsArray, 'meaningsArray');
  }, [meaningsArray]);


  useEffect(() => {
    try {
      axios
        .get(wordListEndpoint, { params: { page: currentPage } })
        .then((res) => {
          setwordsArray(res.data);
        });
    } catch (error) {
      // throw error
    }
  }, [currentPage]);

  return (
    <div className="App">
      <h1 onClick={showMeaningsArray}>VOCAB-BETTER</h1>
      <div className="show-meaning-toggle">
        <div className="text">Expand All Meanings</div>
        <ShowMeaning state={state} setstate={setstate} />
      </div>

      <div className="card">
        {wordsArray.length && Array.from(wordsArray).map((word, index) => {
          return (
            <details className="warning" open={state} key={`word-section-${index}`}>
              <summary>{word}</summary>
              <p>
              {/* {
                meaningsArray.length && meaningsArray[index].length && meaningsArray[index].map(meaning=>{
                  return(
                    <div>
                      word: {meaning.word}
                      phonetic: {meaning.phonetics[0]}
                      sound : {meaning.phonetics[1]}
                      origin: {meaning.origin}
                      meaning :{meaning.meanings.definitions.map(it=><li>{it.definition}</li>)}
                    </div>

                  )
                })
                
                } */}
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

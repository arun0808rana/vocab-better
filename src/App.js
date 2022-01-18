import logo from "./logo.svg";
import "./App.css";
import Pagination from "./Pagination";
import ShowMeaning from "./ShowMeaning";
import { useState } from "react";

function App() {
  const [state, setstate] = useState(false);
  return (
    <div className="App">
      <h1>VOCAB-BETTER</h1>
      <div className="show-meaning-toggle">
        <div className="text">Expand All Meanings</div>
        <ShowMeaning state={state} setstate={setstate} />
      </div>

      <div class="card">
        {[1, 2, 3, 4, 5].map((word, index) => {
          return (
            <details class="warning" open={state} key={`word-section-${index}`}>
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

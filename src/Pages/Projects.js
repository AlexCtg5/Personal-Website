import Header from "../Components/Header";
import Update from "../Components/LastUpdate";

export default function Projects() {
  return (
    <>
      <div className="container">
        <Header />
        <div className="projects-container">
          <h3>
            Finished Projects
            <ul>
              <li>
                <a href="/projects/breakout-game">Breakout game</a> (Python)
              </li>
              <li>
                <a href="/projects/loan-calculator">Loan calculator</a> (Python)
              </li>
            </ul>
          </h3>
          <h3>
            Still working on them
            <ul>
              <li>
                <a href="/projects/desktop-app">
                  Web desktop lookalike app with many features
                </a>{" "}
                (React.js)
              </li>
            </ul>
          </h3>
        </div>
        <Update date={"March 22, 2024"} dateCreated={"March 21, 2024"} />
      </div>
    </>
  );
}

import Header from "../Components/Header";
import Update from "../Components/LastUpdate";
import Source from "../Components/Source";

export default function Anuitate() {
  return (
    <>
      <div className="container">
        <Header />
        <h2 className="title">
          <span className="span-title">&lt;</span> Annuity/Loan calculator{" "}
          <span className="span-title">&gt;</span>
        </h2>
        <div className="loan-container">
          <p>
            I made this application in Python to help me solve exercises more
            quickly for the "Credit Institutions" course at my college. The
            application needs 3 parameters (credit duration, credit interest
            rate, annuity/credit value), and based on these, it returns the
            value you want to find out (annuity/credit value) + the table with
            all the necessary information for each month.
          </p>
          <p>
            I have created this Python{" "}
            <a href="https://en.wikipedia.org/wiki/Graphical_user_interface">
              GUI
            </a>{" "}
            using the{" "}
            <a href="https://en.wikipedia.org/wiki/Tkinter">Tkinter</a> library
            and pandas to return the table into the console.
          </p>
          <p>
            <span>!!! </span>Scroll the photos to see the table
          </p>
          <div className="anuitate-imgs">
            <img src="/images/calculcredit.png" alt="credit" />
            <img
              src="/images/calculanuitate.png"
              alt="anuitate
              "
            />
            <img src="/images/tabelcredit.png" alt="tabel credit" />
          </div>
          <Source
            source={"https://github.com/AlexCtg5/Anuitate-Valoare-Credit-"}
          />
          <Update date={"March 20, 2024"} />
        </div>
      </div>
    </>
  );
}

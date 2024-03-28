import Header from "../Components/Header";
import Update from "../Components/LastUpdate";

export default function About() {
  return (
    <>
      <div className="container">
        <Header />
        <div className="about-container">
          <p>
            Hello, I am Alex, a finance student deeply passionate about the tech
            industry, which motivates me to learn coding in my free time. This
            is my personal website where I will post things that I find
            interesting and enjoy.
          </p>
          <p>
            Besides computer programming, I am also interested in reading,
            sports, and healthy food.
          </p>
          <div className="about-section">
            <h3>Experience</h3>
            <p>
              I don't have any experience yet, but I am willing to get hired and
              I am actively searching for opportunities.
            </p>
          </div>
          <div className="about-section">
            <h3>Skills</h3>
            <p>
              Some skills and programming languages that I am proficient in are:
              Python, JavaScript, React.js, web scraping, data structures and
              algorithms. Lately, I've been enjoying learning Linux and creating
              designs in CSS.
            </p>
          </div>
          <div className="about-section">
            <h3>Education</h3>
            <ul style={{ color: "white" }}>
              <li>
                <p>
                  Faculty of Finance and Banking within the Bucharest University
                  of Economic Studies (ASE)
                </p>
                <p>2021-2024</p>
              </li>
              <li>
                <p>
                  Mathematics and Informatics at National College "Ienachita
                  Vacarescu"
                </p>
                <p>2017-2021</p>
              </li>
            </ul>
            <div className="about-section">
              <h3>Life now</h3>
              <p>
                I'm trying to enhance my programming skills, aiming to become
                better at basketball, doing home workouts, playing The Witcher
                3, and wanting to read more books.
              </p>
            </div>
            <div className="about-section">
              <h3>Resume</h3>
              <p>
                You can also check my resume <a href="/resume">here</a>.
              </p>
            </div>
          </div>
        </div>
        <Update date={"March 21, 2024"} dateCreated={"March 21, 2024"} />
      </div>
    </>
  );
}

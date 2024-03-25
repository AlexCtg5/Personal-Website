import Header from "../Components/Header";
import Update from "../Components/LastUpdate";

export default function DesktopApp() {
  return (
    <>
      <div className="container">
        <Header />
        <h2 className="title">
          <span className="span-title">&lt;</span> Desktop app{" "}
          <span className="span-title">&gt;</span>
        </h2>
        <div className="desktop-container">
          <p>
            I tried to recreate an operating system in the web using React. The
            application features a taskbar, folders, a watch and date,
            mathematical calculator, a weather application, webcam access, a
            chat system, and three games: Sudoku, Snake, and Tic Tac Toe.
            Additionally, I implemented a settings option allowing users to
            change the background.
          </p>
          <p>
            Single library that I used is{" "}
            <a href="https://www.npmjs.com/package/react-draggable">
              react-draggable
            </a>{" "}
            which let's you drag the applications around the screen for a more
            desktop feeling.
          </p>
          <p>
            For the weather GUI I used{" "}
            <a href="https://openweathermap.org/api">open weather API</a>.
          </p>
          <p>
            Chatting app has the google authentification system from{" "}
            <a href="https://firebase.google.com/">Firebase</a> and all the
            messages are stored in the same database.
          </p>
          <p>
            <a href="https://www.youtube.com/watch?v=d0_AVF4wsMk&ab_channel=AlexandruCatangiu">
              Here
            </a>{" "}
            is a video with the app.
          </p>
          <p className="source-p" style={{ marginLeft: "0rem" }}>
            The source code is not available yet.{" "}
          </p>
        </div>
        <Update date={"March 20, 2024"} />
      </div>
    </>
  );
}

import Header from "../Components/Header";
import Update from "../Components/LastUpdate";

export default function Contacts() {
  return (
    <>
      <div className="container">
        <Header />
        <div className="contacts">
          <ul>
            <li>
              <img src="./images/gmail.png" alt="gmail" />
              Gmail: <span>catangiu.alexandru0515@gmail.com</span>
            </li>
            <li>
              <img src="./images/phone.png" alt="phone" />
              Phone: <span>0720725327</span>
            </li>
            <li>
              <img src="./images/linkedin.png" alt="linkedin" />
              LinkedIn:{" "}
              <a href="https://www.linkedin.com/in/alex-catangiu-b845852ba/">
                https://www.linkedin.com/in/alex-catangiu-b845852ba/
              </a>
            </li>
            <li>
              <img src="./images/github.png" alt="github" />
              GitHub:{" "}
              <a href="https://github.com/AlexCtg5">
                https://github.com/AlexCtg5
              </a>
            </li>
            <li>
              <img src="./images/spotify.png" alt="spotify" />
              Spotify:{" "}
              <a href="https://open.spotify.com/user/21zjg7zs57pg55cl45vqncv7q">
                https://open.spotify.com/user/alx
              </a>
            </li>
            <li>
              <img src="./images/instagram.png" alt="instagram" />
              Instagram:{" "}
              <a href="https://www.instagram.com/alex515_/">
                https://www.instagram.com/alex515_/
              </a>
            </li>
          </ul>
        </div>
        <Update date={"March 21, 2024"} dateCreated={"March 21, 2024"} />
      </div>
    </>
  );
}

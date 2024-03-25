import Header from "../Components/Header";

export default function Home() {
  return (
    <>
      <div className="container">
        <Header />
        <div className="posts-container">
          <div className="posts">
            <p>Posts</p>
            <p>Created at</p>
          </div>
          <h3>March 2024</h3>
          <div className="post">
            <div>
              <a href="home/morse-code">
                <img src="./images/morsecode.png" alt="morse code" />
              </a>
              <a href="/home/morse-code" className="post-title">
                morse-code
              </a>
            </div>
            <p>20-03-2024</p>
          </div>
        </div>
      </div>
    </>
  );
}

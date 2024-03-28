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
          <Post
            title={"decimal-binary"}
            href={"/home/decimal-binary"}
            date={"28-03-2024"}
            img={"/images/binary.png"}
          />
          <Post
            img={"./images/morsecode.png"}
            title={"morse-code"}
            date={"20-03-2024"}
            href={"/home/morse-code"}
          />
          <Post
            img={"./images/project.png"}
            title={"Annuity/Loan calculator"}
            date={"18-03-2024"}
            href={"/projects/loan-calculator"}
          />
          <Post
            img={"./images/project.png"}
            title={"Breakout game"}
            date={"18-03-2024"}
            href={"/projects/breakout-game"}
          />
        </div>
      </div>
    </>
  );
}

function Post({ img, href, title, date }) {
  return (
    <div className="post">
      <div>
        <a href={href}>
          <img src={img} alt={title} />
        </a>
        <a href={href} className="post-title">
          {title}
        </a>
      </div>
      <p>{date}</p>
    </div>
  );
}

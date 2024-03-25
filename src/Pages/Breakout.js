import Header from "../Components/Header";
import Source from "../Components/Source";
import Update from "../Components/LastUpdate";

export default function Breakout() {
  return (
    <>
      <div className="container">
        <Header />
        <h2 className="title">
          <span className="span-title">&lt;</span> Breakout{" "}
          <span className="span-title">&gt;</span>
        </h2>
        <div className="breakout-container">
          <div>
            <p>
              I tried recreating the original Breakout{" "}
              <a href="https://en.wikipedia.org/wiki/Arcade_video_game">
                arcade video game{" "}
              </a>
              developed and published by Atari, released on May 13, 1976.
            </p>
            <p>
              Using a single ball, the player must knock down as many bricks as
              possible by using the walls and/or the paddle below to hit the
              ball against the bricks and eliminate them. If the player's paddle
              misses the ball's rebound, they will lose a turn. The player has
              three turns to try to destroy the bricks.
            </p>
            <p>
              I also implemented 2 powers ups. The green power-up that enlarges
              your paddle to make it easier to hit the ball. This lasts for 3
              paddle ball collisions, after which it will return to its normal
              shape. And the blue power-up that spawns 2 more balls on the
              screen to help you destroy bricks more quickly.
            </p>
            <p>
              This project is made with turtle library and helped me learn OOP
              concepts better.
            </p>
            <p>
              You can also read more about Breakout on{" "}
              <a href="https://en.wikipedia.org/wiki/Breakout_(video_game)">
                wikipedia
              </a>
            </p>
            <div className="breakout-imgs">
              <div className="image">
                <img src="/images/breakout.png" alt="breakout" />
              </div>
              <div className="gifs">
                <div className="gif">
                  <img src="/images/bluepower.gif" alt="power gif" />
                </div>
                <div className="gif">
                  <img src="/images/greenpower.gif" alt="power gif" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <Source source={"https://github.com/AlexCtg5/BreakoutGame"} />
        <Update date={"March 22, 2024"} />
      </div>
    </>
  );
}

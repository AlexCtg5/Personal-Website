import { Link } from "react-router-dom";

export default function Header() {
  const fullPath = window.location.pathname;
  const path = fullPath;

  return (
    <div className="header">
      <h1 style={{ color: path === "" ? "white" : "#bc6ff1" }}>
        alx<span style={{ color: "white" }}>{path}</span>
      </h1>
      <div className="header-buttons">
        <Link to="/home">
          <button>home</button>
        </Link>
        <Link to="/projects">
          <button>projects</button>
        </Link>
        <Link to="/about">
          <button>about</button>
        </Link>
        <Link to="/contact">
          <button>contact</button>
        </Link>
      </div>
    </div>
  );
}

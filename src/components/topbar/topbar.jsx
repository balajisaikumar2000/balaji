import "./topbar.scss";

export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            Balaji.io
            {/* <img src="assets/balaji.io.png" alt="logo" height="60" /> */}
          </a>
          <div className="itemContainer">
            <a href="#portfolio">
              <img src="assets/skills.png" alt="skills" />
              <span>Skills</span>
            </a>
          </div>
          <div className="itemContainer">
            <a href="#certificates">
              <img src="assets/certificate.png" alt="certificate" />
              <span>Works & Achievements</span>
            </a>
          </div>
          <div className="itemContainer">
            <a href="#education">
              <img src="assets/graduation-cap.png" alt="education" />
              <span>Certications</span>
            </a>
          </div>
          <div className="itemContainer">
            <a href="#contact">
              <img src="assets/email.png" alt="email" />
              <span>Contact Me</span>
            </a>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}

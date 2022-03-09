import "./conclusion.scss";

export default function Conclusion() {
  return (
    <div className="conclusion">
      <div className="left">
        <div className="linkTo">
          <a href="#intro">Home</a>
        </div>
        <div className="linkTo">
          <a href="#portfolio">Skills</a>
        </div>
        <div className="linkTo">
          <a href="#certificates">Certificates</a>
        </div>
        <div className="linkTo">
          <a href="#education">Education</a>
        </div>
        <div className="linkTo">
          <a href="#contact">Contact Me</a>
        </div>
      </div>

      <div className="right">
        <h2>Social Media</h2>
        <div class="social">
          <span>
            <a href="https://www.linkedin.com/in/balaji-sai-kumar-7804771b6/">
              <img src="assets/linkedin.png" alt="sacs" />
            </a>
          </span>
          <span>
            <a href="https://twitter.com/balajisaikumar3">
              <img src="assets/twitter.png" alt="sacs" />
            </a>
          </span>
          <span>
            <a href="https://www.facebook.com/profile.php?id=100008756593420">
              <img src="assets/facebook.png" alt="sacs" />
            </a>
          </span>
          <span>
            <a href="https://www.instagram.com/itsbalajikumar/">
              <img src="assets/instagram.png" alt="sacs" />
            </a>
          </span>
        </div>
      </div>
    </div>
  );
}

import "./conclusion.scss";

export default function Conclusion() {
  return (
    <div className="conclusion">
      <div class="head">
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
          <div class="downButton">
            <a href="assets/HyreSnap_Resume_Balaji.pdf" class="dnbtn" download>
              <div class="button button-4 geg">
                <img
                  src="assets/download.png"
                  alt="downArrow"
                  class="downIcon"
                />
                <span class="name">Download Resume</span>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div class="copyrights">
        © 2022 Balaji Sai Kumar . All rights reserved
      </div>
    </div>
  );
}

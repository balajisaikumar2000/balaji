import "./certificates.scss";

export default function Certificates() {
  return (
    <div className="certificates" id="certificates">
      <p>articles & Projects</p>
      <div className="articles">
        <div class="course">
          <img src="assets/x.png" alt="asuhcdb" className="contImg" />
          <div class="course-info">
            <h2>How HTTPS works</h2>
            <span className="arrow">
              <a
                href="https://medium.com/@balajisaikumar3/how-https-works-1c2dc3d91361"
                className="arrowLink"
              >
                <img src="assets/arrow-right.png" alt="right-arrow" />
              </a>
            </span>
          </div>
        </div>
        <div class="course">
          <img src="assets/jsArray.png" alt="asuhcdb" className="contImg" />
          <div class="course-info">
            <h2>JS Array Methods</h2>
            <span className="arrow">
              <a
                href="https://medium.com/@balajisaikumar3/javascript-array-methods-8a2535722044"
                className="arrowLink"
              >
                <img src="assets/arrow-right.png" alt="right-arrow" />
              </a>
            </span>
          </div>
        </div>
      </div>
      <div className="projects">
        <div class="course">
          <img src="assets/p1.png" alt="asuhcdb" className="contImg" />
          <div class="course-info">
            <h2>Quiz App </h2>
            <span className="arrow">
              <a
                href="https://rhapsody-quiz-app.netlify.app/"
                className="arrowLink"
              >
                <img src="assets/arrow-right.png" alt="right-arrow" />
              </a>
            </span>
          </div>
        </div>
        <div class="course">
          <img src="assets/p2.png" alt="asuhcdb" className="contImg" />
          <div class="course-info">
            <h2>restaurant recommender </h2>
            <span className="arrow">
              <a href="https://restaurants-near.netlify.app/" className="arrowLink">
                <img src="assets/arrow-right.png" alt="right-arrow" />
              </a>
            </span>
          </div>
        </div>
        <div class="course">
          <img src="assets/p3.png" alt="asuhcdb" className="contImg" />
          <div class="course-info">
            <h2>Shortest Way </h2>
            <span className="arrow">
              <a
                href="https://shortest-way-finder.netlify.app/"
                className="arrowLink"
              >
                <img src="assets/arrow-right.png" alt="right-arrow" />
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

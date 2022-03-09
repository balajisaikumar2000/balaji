import "./certificates.scss";

export default function Certificates() {
  return (
    <div className="certificates" id="certificates">
      <h1>Articles</h1>
      <div class="course">
        {/* <div class="course-preview"> */}
        <img src="assets/x.png" alt="asuhcdb" className="contImg" />
        {/* </div> */}
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
          <a
            href="https://medium.com/@balajisaikumar3/how-https-works-1c2dc3d91361"
            className="visitLink"
          >
            <img src="assets/globe1.png" alt="globe" />
            <span class="visit">Visit</span>
          </a>
        </div>
      </div>
      <div class="course">
        <img src="assets/jsArray.png" alt="asuhcdb" className="contImg" />
        <div class="course-info">
          <h2>JavaScript Array Methods</h2>
          <span className="arrow">
            <a
              href="https://medium.com/@balajisaikumar3/javascript-array-methods-8a2535722044"
              className="arrowLink"
            >
              <img src="assets/arrow-right.png" alt="right-arrow" />
            </a>
          </span>
          <a
            href="https://medium.com/@balajisaikumar3/javascript-array-methods-8a2535722044"
            className="visitLink"
          >
            <img src="assets/globe1.png" alt="globe" />
            <span class="visit">Visit</span>
          </a>
        </div>
      </div>
      <h1>Certificates</h1>
      <div className="credCertificates">
        <div className="certificate">
          <p>
            ❖ Front-end development with React
            <i className="platform">---Coursera</i>
          </p>
        </div>
        <div className="certificate">
          <p>
            ❖ Sever-Side Development with NodeJS, Express and MongoDB
            <i className="platform">---Coursera</i>
          </p>
        </div>
        <div className="certificate">
          <p>
            ❖ Front-end Web UI FrameWorks and Tools: Bootstrap
            <i className="platform">---Coursera</i>
          </p>
        </div>
        <div className="certificate">
          <p>
            ❖ The Complete JavaScript Course 2022: From Zero to Expert
            <i className="platform">---Udemy</i>
          </p>
        </div>
      </div>
    </div>
  );
}
// {/* <a
// href="https://medium.com/@balajisaikumar3/how-https-works-1c2dc3d91361"
// className="card"
// >
// <h3>How HTTPS Works </h3>
// </a>
// <a
// href="https://medium.com/@balajisaikumar3/javascript-array-methods-8a2535722044"
// className="card"
// >
// <h3>JavaScript array methods</h3>
// </a> */}

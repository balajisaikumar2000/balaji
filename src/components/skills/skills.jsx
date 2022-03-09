import "./skills.scss";
import Progress from "./Progress";

export default function Skills() {
  return (
    <div className="portfolio" id="portfolio">
      <div className="element">
        <h4 className="header">HTML & CSS</h4>
        <div className="pb">
          <Progress done="90" />
        </div>
      </div>
      <div className="element">
        <h4 className="header">JavaScript</h4>
        <div className="pb">
          <Progress done="80" />
        </div>
      </div>
      <div className="element">
        <h4 className="header">Python</h4>
        <div className="pb">
          <Progress done="80" />
        </div>
      </div>
      <div className="element">
        <h4 className="header">Core Java</h4>
        <div className="pb">
          <Progress done="60" />
        </div>
      </div>
      <div className="element">
        <h4 className="header">React </h4>
        <div className="pb">
          <Progress done="80" />
        </div>
      </div>
      <div className="element">
        <h4 className="header">MySQL</h4>
        <div className="pb">
          <Progress done="70" />
        </div>
      </div>
      <div className="element">
        <h4 className="header">Git & GitHub</h4>
        <div className="pb">
          <Progress done="90" />
        </div>
      </div>
      <div className="element">
        <h4 className="header">Node.js</h4>
        <div className="pb">
          <Progress done="70" />
        </div>
      </div>
    </div>
  );
}

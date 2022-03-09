import "./App.scss";
import { useState } from "react";
import Contact from "./components/contact/contact";
import Intro from "./components/intro/intro";
import Skills from "./components/skills/skills";
import Certificates from "./components/certificates/certificates";
import Topbar from "./components/topbar/topbar.jsx";
import Education from "./components/education/education.jsx";
import Menu from "./components/menu/Menu";
import Description from "./components/description/description";
import Conclusion from "./components/conclusion/conclusion";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

      <Menu />
      <div className="sections">
        <Intro />
        <Description />
        <Skills />
        <Education />
        <Certificates />
        <Contact />
        <span className="conc">
          <Conclusion />
        </span>
      </div>
    </div>
  );
}

export default App;

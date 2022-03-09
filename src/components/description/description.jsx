import React from "react";
import "./description.scss";
import Typewriter from "typewriter-effect";

export default function Description() {
  return (
    <div className="description">
      <div className="container">
        <Typewriter
          options={{
            // strings: ['Hello', 'World'],
            autoStart: true,
            loop: true,
          }}
          onInit={(typewriter) => {
            typewriter
              .typeString(
                "A self-motivated web developer with good knowledge and proficiency in JavaScript, HTML, CSS, and mobile responsive web development, as well as strong skills and ability in writing clean and efficient code, Seeking to further improve my skills as the future full stack developer at Atmospheric Solutions"
              )
              .callFunction(() => {
                console.log("String typed out!");
              })
              .pauseFor(2500)
              .deleteAll()
              .callFunction(() => {
                console.log("All strings were deleted");
              })
              .start();
          }}
        />
      </div>
    </div>
  );
}

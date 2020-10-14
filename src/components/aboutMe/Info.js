import React from "react";

import Typing from "react-typing-animation";

import "./Info.scss";

export default function Info() {
  const helloWorld = "<HELLO WORLD>";

  return (
    <div className="sidebar__info">
      <Typing>
        <p className="fade upper first">{helloWorld}</p>
        <p className="fade ln">&gt; npm run aboutme</p>
        <p className="fade ln">&gt; nodemon index</p>

        <Typing.Speed ms={20} />
        <p className="fade">[nodemon] watching extensions: js,mjs,json</p>
        <p className="fade">[nodemon] starting `node index`</p>

        <Typing.Speed ms={10} />

        <p className="main space">My name is Vladyslav Shyder.</p>
        <p className="main">I am Junior Full-Stack developer from Kyiv.</p>

        <Typing.Speed ms={5} />

        <p className="main space">Studying architecture at KNUCA.</p>
        <p className="web">
          Last year i became interested in web. I have completed html/css and JS
          courses. My stack is React and Nodejs.
        </p>
      </Typing>
    </div>
  );
}

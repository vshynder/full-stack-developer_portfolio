import React from "react";

import examples from "./works";

export default function FrontEndWorks() {
  return (
    <div className="front-end">
      {examples.frontEnd.map((work, index) => {
        return (
          <div className="card">
            <div>{work.title}</div>
            <img className="card__image" alt={work.title} src={work.image} />
            <p className="card__stack">{work.stack}</p>
          </div>
        );
      })}
    </div>
  );
}

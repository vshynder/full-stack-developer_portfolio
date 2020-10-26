import React from "react";

export default function FrontEndWorks({ works }) {
  return (
    <div className="front-end">
      {works.map((work, index) => {
        return (
          <div key={index} className="card">
            <div className="card__title">{work.title}</div>
            <img className="card__image" alt={work.title} src={work.image} />
            <p className="card__stack">{work.stack}</p>
          </div>
        );
      })}
    </div>
  );
}

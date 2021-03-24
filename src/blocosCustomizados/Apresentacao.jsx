import React from "react";
import "./style.css";

export function Apresentacao({ title, subtitle, image, right }) {
  return (
    <>
      <div className="content-box">
        <div
          className={
            right ? "content-apresentacao-right" : "content-apresentacao"
          }
        >
          <div className="sub-content-apresentacao">
            <h1 className="title-apresentacao">{title}</h1>
            <h3
              className={
                right ? "subtitle-apresentacao-right" : "subtitle-apresentacao"
              }
            >
              {subtitle}{" "}
            </h3>
          </div>

          <div className="sub-content-image-apresentacao"></div>
          <img className="tv" src={image} alt="tv" />
        </div>
      </div>
    </>
  );
}

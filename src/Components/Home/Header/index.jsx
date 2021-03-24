import React from "react";
import netflixLogo from "../../../assets/home/netflix.png";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <>
      <div className="Container-header">
        <div className="nav-bar">
          <img id="logo" src={netflixLogo} alt="Netflix" />

          <div className="button-container">
            <select className="button-entrar" defaultValue="Português">
              <option value="Português"> Português</option>
              <option value="English"> English </option>
            </select>

            <Link className="button-entrar" id="entrar" to="/login">
              {" "}
              Entrar
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

import React from "react";
import PropTypes from "prop-types";

const Header = () => {
  const themeMode = () => {
    const body = document.querySelector("body");
    document
      .querySelectorAll(
        "body, .main-header, input, .card-container, .username, .desc, .card-top__date, .card-infos, .card-text"
      )
      .forEach((item) => item.classList.toggle("light"));

    if (body.classList.contains("light")) {
      document.getElementById("themeIcon").className = "bi bi-moon-fill ms-1";
      document.getElementById("themeText").textContent = "Koyu";
    } else {
      document.getElementById("themeIcon").className =
        "bi bi-brightness-high-fill ms-1";
      document.getElementById("themeText").textContent = "Açık";
    }
  };

  return (
    <header className="main-header">
      <h1>Github Finder</h1>
      <p onClick={themeMode}>
        <span id="themeText">Açık</span>{" "}
        <i className="bi bi-brightness-high-fill ms-1" id="themeIcon"></i>
      </p>
    </header>
  );
};

Header.propTypes = {
  brandName: PropTypes.string,
};

export default Header;

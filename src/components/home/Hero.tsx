import React from "react";
import heroCmIcon from "./../../../public/icons/home/hero-CM-icon.svg";
import fbIcon from "./../../../public/icons/home/facebook-white.svg";
import igIcon from "./../../../public/icons/home/instagram-white.svg";
import searchIcon from "./../../../public/icons/home/magnifying-glass-solid-white.svg";

const Hero = () => {
  return (
    <section className="home-hero">
      <img className="cm-big-logo" src={heroCmIcon.src} alt="CM" height={600} />
      <div className="homer-hero-text">
        <h2>Piekno jest doskonałością z defektami</h2>
        <span>Gilbert Adair</span>
      </div>
      <div className="home-hero-b-nav">
        <div className="home-hero-b-nav__socials">
          <span>Odwiedź nasze profile</span>
          <a href="">
            <img src={igIcon.src} alt="instagram" width={33} height={33} />
          </a>
          <a href="">
            <img src={fbIcon.src} alt="facebook" width={16} height={30} />
          </a>
        </div>
        <div className="home-hero-b-nav__searchbar">
          <form id="searchbar">
            <input
              type="search"
              id="search"
              name="search"
              placeholder="wyszukaj w serwisie"
            />
            <button className="searchbar-btn">
              <img src={searchIcon.src} alt="Szukaj" width={27} height={27} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Hero;

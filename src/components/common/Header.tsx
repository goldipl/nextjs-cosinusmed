import React, { useState } from "react";
import logoCosinusMed from "./../../../public/icons/common/cosinusmed-logo.svg";
import whiteCaretDownIcon from "./../../../public/icons/common/white_caret_down.svg";

const Header = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  return (
    <header className="header">
      <div className="header-wrapper">
        <div className="header-wrapper__logo">
          <a href="/">
            <img
              src={logoCosinusMed.src}
              alt="CosinusMed"
              width={209}
              height={46}
            />
          </a>
        </div>
        <nav className="header-wrapper__nav">
          <ul className="nav-list">
            <li className="nav-list-li">
              <a href="">Strona główna</a>
            </li>
            <li
              className="nav-list-li list-second-level"
              onClick={handleMenuToggle}
            >
              <span>Oferta</span>
              <img
                className="caretdown-icon"
                src={whiteCaretDownIcon.src}
                alt="white caret down"
                height={20}
                width={16}
              />
              <div className={`menu-wrapper ${isMenuVisible ? "show" : ""}`}>
                <div className="menu-wrapper__slot">
                  <h3 className="menu-wrapper__slot--title"></h3>
                  <a href="" className="menu-wrapper__slot--item"></a>
                  <a href="" className="menu-wrapper__slot--item"></a>
                  <a href="" className="menu-wrapper__slot--item"></a>
                  <a href="" className="menu-wrapper__slot--item"></a>
                  <a href="" className="menu-wrapper__slot--item"></a>
                  <a href="" className="menu-wrapper__slot--item"></a>
                  <a href="" className="menu-wrapper__slot--item see-all"></a>
                </div>
                <div className="menu-wrapper__slot">
                  <h3 className="menu-wrapper__slot--title"></h3>
                  <a href="" className="menu-wrapper__slot--item"></a>
                  <a href="" className="menu-wrapper__slot--item"></a>
                  <a href="" className="menu-wrapper__slot--item"></a>
                  <a href="" className="menu-wrapper__slot--item"></a>
                  <a href="" className="menu-wrapper__slot--item"></a>
                  <a href="" className="menu-wrapper__slot--item"></a>
                  <a href="" className="menu-wrapper__slot--item see-all"></a>
                </div>
                <div className="menu-wrapper__slot">
                  <h3 className="menu-wrapper__slot--title"></h3>
                  <a href="" className="menu-wrapper__slot--item"></a>
                  <a href="" className="menu-wrapper__slot--item"></a>
                  <a href="" className="menu-wrapper__slot--item"></a>
                  <a href="" className="menu-wrapper__slot--item"></a>
                  <a href="" className="menu-wrapper__slot--item"></a>
                  <a href="" className="menu-wrapper__slot--item"></a>
                  <a href="" className="menu-wrapper__slot--item see-all"></a>
                </div>
                <div className="menu-wrapper__btns">
                  <a className="full-grey-btn" href="#">
                    Nasz zespół
                  </a>
                  <a className="full-grey-btn" href="#">
                    Promocje
                  </a>
                  <a className="full-grey-btn" href="#">
                    Cennik usług
                  </a>
                </div>
              </div>
            </li>
            <li className="nav-list-li">
              <a href="">Zespół</a>
            </li>
            <li className="nav-list-li">
              <a href="">Aktualności</a>
            </li>
            <li className="nav-list-li">
              <a href="">Porady</a>
            </li>
            <li className="nav-list-li">
              <a href="">Kontakt</a>
            </li>
          </ul>
        </nav>
        <div className="header-wrapper__btns">
          <a className="full-white-btn" href="#">
            umów wizytę
          </a>
          <a className="small-border-white-btn" href="#">
            en
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;

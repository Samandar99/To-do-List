import React, { useState } from "react";
import "../style/Sidebar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
const Sidebar = () => {
  const [nav, Setnav] = useState("s-wrap");
  const [toggleIcon, setToggleIcon] = useState("nav__toggler");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [moadlOpen, setModal] = useState(true);

  const closedModal = () => {
    setIsModalOpen(false);
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handlerNav = () => {
    nav === "s-wrap" ? Setnav("s-wrap nav__active ") : Setnav("s-wrap");

    // ToggLerIcon
    toggleIcon === "nav__toggler"
      ? setToggleIcon("nav__toggler toggle")
      : setToggleIcon("nav__toggler");
  };

  return (
    <div className={nav}>
      <div className="focus">
        <div className="all-text">
          <div onClick={handlerNav} className={toggleIcon}>
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
          </div>
          <span className="task-all">All Tasks </span>
        </div>
      </div>

      <div className="S-block">
        <div className="S-box">
          <div className="circle"></div>
          <span className="Pur-text">Purchases </span>
        </div>
        <div className="S-box">
          <div className="circle1"></div>
          <span className="Pur-text">Frontend </span>
        </div>

        <div className="S-box">
          <div className="circle2"></div>
          <span className="Pur-text">Movies </span>
        </div>

        <div className="S-box">
          <div className="circle3"></div>
          <span className="Pur-text">Books </span>
        </div>

        <div className="S-box">
          <div className="circle4"></div>
          <span className="Pur-text">private </span>
        </div>
        <div className="plus" onClick={toggleModal}>
          <span className="plus start">+</span>
          <span className="addtext">Add faile</span>
        </div>

        {isModalOpen ? (
          <div className="modal__active">
            <div className="circleBlack" onClick={closedModal}>
              <FontAwesomeIcon
                icon={faClose}
                className="faClosed"
              ></FontAwesomeIcon>
            </div>

            <input type="text" className="selection" />

            <div className="circles">
              <div className="colorcircle"></div>
              <div className="colorcircle1"></div>

              <div className="colorcircle2"></div>
              <div className="colorcircle3"></div>

              <div className="colorcircle4"></div>
              <div className="colorcircle5"></div>

              <div className="colorcircle6"></div>
              <div className="colorcircle7"></div>
            </div>
            <button className="s-button">Add</button>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Sidebar;

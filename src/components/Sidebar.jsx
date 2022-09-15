import React, { useState } from "react";
import "../style/Sidebar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import Modal from "./Modal";

const Sidebar = () => {
  const [nav, Setnav] = useState("s-wrap");
  const [toggleIcon, setToggleIcon] = useState("nav__toggler");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [blocks, setBlocks] = useState("blocks");
  const [noneText, setNoneText] = useState("task-all");
  const [burger, setBurger] = useState("nav__toggler1");

  const [inputCateroes, setInputCateroes] = useState([]);

  const colors = [
    "colorcircle1",
    "colorcircle2",
    "colorcircle3",
    "colorcircle4",
    "colorcircle5",
    "colorcircle6",
    "colorcircle7",
  ];

  const closedModal = () => {
    setIsModalOpen(!true);
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

    blocks === "blocks"
      ? setBlocks("blocks blocksactive")
      : setBlocks("blocks");

    noneText === "task-all"
      ? setNoneText("task-all taskNone")
      : setNoneText("task-all");

    burger === "nav__toggler1"
      ? setBurger("nav__toggler1 navleft")
      : setBurger("nav__toggler1");
  };

  const addNewItem = (item) => {
    inputCateroes.push({
      id: inputCateroes.length + 1,
      ...item,
    });

    setInputCateroes([...inputCateroes]);
    setIsModalOpen();
  };

  const handlerClosedCategories = (id) => {
    const removeId = inputCateroes.filter((category) => {
      return category.id !== id;
    });
    setInputCateroes(removeId);
  };

  return (
    <div className={nav}>
      <div className="focus">
        <div className="all-text">
          <div className={burger}>
            <div onClick={handlerNav} className={toggleIcon}>
              <div className="line1"></div>
              <div className="line2"></div>
              <div className="line3"></div>
            </div>
          </div>
          <span className={noneText}>All Tasks</span>
        </div>
      </div>

      <div className="S-block">
        <div className={blocks}>
          {inputCateroes.map((item) => (
            <div className="S-box" key={item.id}>
              <div className="eys">
                <div className={`circle ${colors[item.color]}`}></div>

                <span className="Pur-text">{item.description}</span>
              </div>
              <div onClick={() => handlerClosedCategories(item.id)}>
                <FontAwesomeIcon
                  icon={faClose}
                  className="childernbox"
                ></FontAwesomeIcon>
              </div>
            </div>
          ))}

          <div className="plus" onClick={toggleModal}>
            <span className="plus start">+</span>
            <span className="addtext">Add folder</span>
          </div>
        </div>
        {isModalOpen ? (
          <Modal
            onSubmit={addNewItem}
            colors={colors}
            closedModal={closedModal}
          />
        ) : null}
      </div>
    </div>
  );
};

export default Sidebar;

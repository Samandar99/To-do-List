import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";

const Modal = ({ closedModal, onSubmit, colors }) => {
  const [newInputCategories, setnewInputCategories] = useState("");

  const [newFolderColorIndex, setNewFolderColorIndex] = useState(0);

  const handlerInputCategores = (e) => {
    setnewInputCategories(e.target.value);
  };

  const handleColorSelect = (index) => {
    setNewFolderColorIndex(index);
  };

  const onAddClick = () => {
    if (!newInputCategories) return;

    onSubmit({
      description: newInputCategories,
      color: newFolderColorIndex,
    });

    setnewInputCategories("");
    setNewFolderColorIndex(0);
  };

  return (
    <div className="modal__active">
      <button className="circleBlack" onClick={closedModal}>
        <FontAwesomeIcon icon={faClose} className="faClosed"></FontAwesomeIcon>
      </button>

      <input
        value={newInputCategories}
        type="text"
        className="selection"
        onChange={handlerInputCategores}
      />

      <div className="circles">
        {colors.map((item, index) => (
          <div
            className={`colorcircle ${item} ${
              index === newFolderColorIndex ? "colorBorder" : ""
            }`}
            key={index}
            onClick={() => handleColorSelect(index)}
          ></div>
        ))}
      </div>
      <button className="buttonrr" onClick={onAddClick}>
        Add
      </button>
    </div>
  );
};

export default Modal;

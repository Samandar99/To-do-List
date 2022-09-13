import React, { useState } from "react";
import "../style/main.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faPencil } from "@fortawesome/free-solid-svg-icons";

const Main = () => {
  const [newTask, setNewtask] = useState("");
  const [posts, setPosts] = useState([]);
  const [inputShow, setInputShow] = useState(false);

  const inputChangeHandler = (e) => {
    setNewtask(e.target.value);
  };

  const closeInput = () => setInputShow(false);

  const handlerClick = (e) => {
    if (newTask === "") {
      return;
    }

    posts.push({
      id: posts.length + 1,
      description: newTask,
    });

    setPosts([...posts]);
    setNewtask("");
    closeInput();
  };

  const handlerClosed = (id) => {
    const removeItem = posts.filter((todo) => {
      return todo.id !== id;
    });

    setPosts(removeItem);
  };

  const onClick = () => setInputShow(true);

  return (
    <div className="m-wrap">
      <div className="articler">
        <p className="article">Фронтенд</p>
        <FontAwesomeIcon icon={faPencil} className="pencil"></FontAwesomeIcon>
      </div>

      <div className="solid"> </div>

      <div className="box">
        {posts.map((item, index) => (
          <label className="container" key={index}>
            <span className="description"> {item.description} </span>

            <input type="checkbox" />
            <span className="checkmark"></span>
            <FontAwesomeIcon
              onClick={() => handlerClosed(item.id)}
              className="closed"
              icon={faClose}
            ></FontAwesomeIcon>
          </label>
        ))}

        {inputShow ? (
          <div className="footer">
            <div>
              <input
                value={newTask}
                onChange={inputChangeHandler}
                type="text"
                className="inputC"
              />
              <div className="buttons">
                <button className="addbuttton" onClick={handlerClick}>
                  Add new task
                </button>
                <button className="cancelbutton" onClick={closeInput}>
                  Cancel
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="addTask" onClick={onClick}>
            <FontAwesomeIcon
              icon={faPlus}
              className="add-icon"
            ></FontAwesomeIcon>
            <span className="add-text">Add Task</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Main;

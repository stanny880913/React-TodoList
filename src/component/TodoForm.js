import React, { useState, useEffect, useRef } from "react";

function TodoForm(props) {

  const [input, setInput] = useState(props.edit ? props.edit.value : "");
  // 後面不接空字串是讓你update時可以直接根據本身的input text 做更改，若useState('')，則需要全部重新輸入
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
    });

    setInput("");
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      {props.edit ? (
        <input
          type="text"
          placeholder="Update Your Todo"
          value={input}
          name="text"
          className="todo-input edit"
          onChange={handleChange}
          ref={inputRef}
        />
      ) : (
        <input
          type="text"
          placeholder="Add Your Todo"
          value={input}
          name="text"
          className="todo-input"
          onChange={handleChange}
          ref={inputRef}
        />
      )}
      <button className={`todo-button ${props.edit ? "edit" : ""}`}>
        {props.edit ? "Update your todo" : "Add Todo"}
      </button>
    </form>
  );
}

export default TodoForm;

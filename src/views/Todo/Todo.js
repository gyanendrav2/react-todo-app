import React, { useState } from 'react';
import './style.css';

const Todo = () => {
    const [inputValue, setInputValue] = useState('');
    const [todo, setTodo] = useState([]);

    const handleInput = (e) => {
        setInputValue(e.target.value);
    };

    const handleButton = () => {
        setTodo([...todo, inputValue]);
        setInputValue('')
    };

    return (
        <div className="todo_wrapper">
            <div className="container">
                <h2>Todo App</h2>
                <div className="todo_inputs">
                    <input
                        type="text"
                        className="input_box"
                        placeholder="Enter task name"
                        value={inputValue}
                        onChange={handleInput}
                    />
                    <button className="add_button" onClick={handleButton}>
                        Add Task
                    </button>
                </div>
                <ol className="list">
                    {todo.map((suman, i)=>(
                        <li key={i}>{suman}</li>
                    ))}
                </ol>
            </div>
        </div>
    );
};

export default Todo;

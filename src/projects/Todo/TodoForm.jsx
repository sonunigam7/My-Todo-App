import { useState } from "react";

export const TodoForm = ({ onAddTodo }) => {
    const [inputValue, setInputValue] = useState({ id: '', content: '', checked: false });

    const handleInputChange = (value) => {
        setInputValue({ id: value, content: value, checked: false });
    }

    const handleFormSubmit = (event) => {
        event.preventDefault();
        // Ensure inputValue.content exists
        if (!inputValue.content.trim()) return;

        onAddTodo(inputValue);
        setInputValue({ id: '', content: '', checked: false });
    }

    return (
        <section className="form">
            <form onSubmit={handleFormSubmit}>
                <div className="input-box">
                    <input 
                        type="text"
                        placeholder="Add your goal"
                        className="todo-input"
                        autoComplete="off"
                        value={inputValue.content}
                        onChange={(event) => handleInputChange(event.target.value)}
                    />
                </div>
                <div className="task-btn">
                    <button className="submit-btn" type="submit">Add Task</button>
                </div>
            </form>
        </section>
    );
};

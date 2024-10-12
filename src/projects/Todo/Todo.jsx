import './Todo.css';
import { TodoForm } from './TodoForm';
import { TodoList } from './TodoList';
import { TodoDate } from './TodoDate';
import { useState } from 'react';
import { getLocalStorageTodoData, setLocalStorageTodoData } from './TodoLocalstorage';



export const Todo = () => {

    const [task, setTask] = useState(() => getLocalStorageTodoData());


    const handleFormSubmit = (inputValue) => {
        const { id, content, checked } = inputValue;
        //to check if the input field is empty or not
        if (!content) return;
        //to check if the data is already exist
        // if (task.includes(inputValue)) return;
        const ifTodoContentMatched = task.find((curTask) => curTask.content === content)
        if (ifTodoContentMatched) return;


        setTask((prevTask) => [...prevTask, { id, content, checked }]);
    }

    //todo handleDeleteTodo function
    const handleDeleteTodo = (id) => {
        const updatedTask = task.filter((curTask) => curTask.id !== id);
        setTask(updatedTask);
    }

    //Clear all tasks
    const handleClearAllTasks = () => {
        setTask([])
    }

    // todo onHandleCheckedTodo function
    const handleCheckedTodo = (content) => {
        const updatedTask = task.map((curTask) => {
            if (curTask.content === content) {
                return { ...curTask, checked: !curTask.checked }
            }
            else {
                return curTask
            }
        });
        setTask(updatedTask);
    }


    //todo Add data to local Storage
    setLocalStorageTodoData(task);


    return <section className="todo-container">
        <header>
            <h1>Task Tracker</h1>
            <TodoDate />
        </header>

        <TodoForm onAddTodo={handleFormSubmit} />

        <section className='todo-list-box'>
            <ul>
                {
                    task.map((currTask, index) => {
                        return <TodoList
                            key={currTask.id}
                            data={currTask.content}
                            checked={currTask.checked}
                            onHandleDeleteTodo={() => handleDeleteTodo(currTask.id)}
                            onHandleCheckedTodo={handleCheckedTodo} />

                    })
                }
            </ul>
        </section>

        <section className='clear-all-section'>
            <button className='clear-btn' onClick={handleClearAllTasks}>
                Clear All
            </button>
        </section>

    </section>
}
import { IoMdCheckbox } from "react-icons/io"
import { MdDeleteForever } from "react-icons/md"
import './Todo.css'

export const TodoList = ({ onHandleDeleteTodo, data, checked, onHandleCheckedTodo }) => {
    return (<li className='todo-item'>
        <span
            className={checked ? 'checklist' : 'notChecklist'}>{data}</span>

            <div className="list-btn">
        <button
            
            onClick={() => onHandleCheckedTodo(data)}
            ><IoMdCheckbox
            className={checked?'checkedTrue':'checkedFalse'}
            ></IoMdCheckbox></button>
        <button
         onClick={() => onHandleDeleteTodo(data)} >
            <MdDeleteForever
            className='delete-btn'
            ></MdDeleteForever>
        </button>
            </div>
    </li>
    )
}
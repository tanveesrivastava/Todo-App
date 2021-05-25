import React from 'react';

const Todo=({text,todo,todos,setTodos})=>{

    const deleteHandler=()=>{
        setTodos(todos.filter((el)=>el.id!==todo.id))
    }

    const completeHandler=()=>{
        setTodos(todos.map(item=>{
            if(item.id===todo.id){
                return{
                    ...item,completed:!item.completed
                }
            }
            return item
        }))
    }
    return(
        <div className="Todo">
            
            <li className={`todo-item ${todo.completed ?" todo-row completed" :""}`}>{text}</li>
            <button onClick={completeHandler} className="complete-btn">
                <i className="far fa-check-circle add-btn" title="Complete Item"></i>
            </button>
            <button onClick={deleteHandler}className="trash-btn">
                <i className="far fa-trash-alt add-btn" title="Delete Item"></i>
            </button>
        </div>
        
    );
}

export default Todo;
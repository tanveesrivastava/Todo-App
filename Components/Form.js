import React from 'react';

const Form= ({setInputText,todos,setTodos,inputText,setStatus})=>{
    const inputTextHandler=(e)=>{
        console.log(e.target.value)
        setInputText(e.target.value)

    }
    const submitTodoHandler=(e)=>{
        e.preventDefault();
        setTodos([
            ...todos,{text:inputText,completed:false, id:Math.random()*1000}
        ])
        setInputText("")
    }

    const statusHandler=(e)=>{
      setStatus(e.target.value)
    }

    return(
      
        <form>
        <input 
        placeholder="🖊Add your Todos..."
        value={inputText} 
        onChange={inputTextHandler} 
        type="text" 
        className="todo-input" 
        />
        <button onClick={submitTodoHandler}className="todo-button" type="submit">
          <i className="fas fa-plus-square" title="Add Item"></i>
        </button>
        <div className="select">
          <select onChange={statusHandler} name="todos" className="filter-todo">
            <option value="all">Show All Tasks</option>
            <option value="completed">Show Completed Tasks</option>
            <option value="uncompleted">Show Active Tasks</option>
          </select>
        </div>
      </form>
      
    );
}

export default Form; 
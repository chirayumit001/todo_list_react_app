import React from 'react'
import {TodoItem} from "./TodoItem";

export const Todos = (props) => {

    let footerStyle = {
        position: "relative",
        bottom:"0",
        width: "100%"
}

    return (
        <div className='container' style={footerStyle}>
            <h3 className='my-3'>ToDos List</h3>
            {props.todos.length===0? 'No ToDo\'s to display' :  
            props.todos.map((todo)=>{
                return(
                    <>
                    <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete}/> <hr/>
                    </>)
            })}
            
        </div>
    )
}



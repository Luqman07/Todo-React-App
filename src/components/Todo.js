import { useState } from "react"

const Todo = ({todo, todos, setTodos, searchArr}) => {
    const [a, setA] = useState(false)

    const updateDone = (e) => { 
        e.target.disabled = true 
        setA(true)
        const completedTodo = todos.map(state => (
            state.id === todo.id ? {...state, done: !state.done} : {...state}
        ))
        setTodos(completedTodo)
    }
    const deleteHandler = () => {
        const filteredArray = todos.filter(state => state.id !== todo.id)
        setTodos(filteredArray)
    }
    
    
    return ( 
        <div className={todo.done ? 'todo border-left' : 'todo' } >
            <p>{todo.todo}</p>
            <div className="btn">
                <button onClick={updateDone} className={a ? 'opacity edit': 'edit'}>Done</button>
                <button onClick={deleteHandler} className="delete">Delete</button>
            </div>
        </div>
     );
}
 
export default Todo;
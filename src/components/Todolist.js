import Todo from "./Todo";

const Todolist = ({ todos, setTodos, searchArr, setSearchArr }) => {
    
    return (
        <div className="todo-list">
            {todos.length > 0 &&
                todos.map(todo => (
                <Todo 
                setTodos={setTodos} 
                todos={todos}
                todo={todo}  
                searchArr={searchArr} 
                setSearchArr={setSearchArr} 
                key={todo.id} />
            ))
        }
        </div>
    );
}

export default Todolist;
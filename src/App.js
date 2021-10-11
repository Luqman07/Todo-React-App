import { useState, useEffect } from "react";
import Todolist from "./components/Todolist";
import './styles/app.scss'
import Textfield from "./components/Textfield";
import Search from "./components/Search";
import Valid from "./components/Valid";
import { Found, NotFound } from "./components/Valid";

function App() {
  const [todos, setTodos] = useState([])
  const [searchArr, setSearchArr] = useState([])
  const [searchInput, setSearchInput] = useState('')
  const [isEmpty, setIsEmpty] = useState(true)
  const [isSeaArrEmpty, setIsSeaArrEmpty] = useState(false)
  const [validate, setValidate] = useState('')
  const [searchEmpty, setSearchEmpty] = useState('')

  useEffect(() => {
    const filteredArray = todos.filter(todo => (
      todo.todo.toLocaleLowerCase().includes(searchInput.toLocaleLowerCase())
    ))
    setSearchArr(filteredArray)
    if (searchArr.length === 0) {
      // console.log('1', searchArr);
      // setSearchEmpty('Not found')
    } else {
      // console.log('0', searchArr.length)
      // console.log('1', searchArr);
      // setIsSeaArrEmpty(true)
      // setSearchEmpty('')
    }
    // eslint-disable-next-line
  }, [searchInput])

  return (
    <div className="App">
      <header className="todo-header">
        <h1>Todo App</h1>
        <Valid validate={validate} />
        <Textfield
          todos={todos}
          setTodos={setTodos}
          setValidate={setValidate}
          isEmpty={isEmpty}
          setIsEmpty={setIsEmpty}
        />

        {todos.length > 0 && <Search
          searchInput={searchInput}
          setSearchInput={setSearchInput}
          searchArr={searchArr}
          isSeaArrEmpty={isSeaArrEmpty}
          setIsSeaArrEmpty={setIsSeaArrEmpty}
          setSearchEmpty={setSearchEmpty}
        />}
        {isSeaArrEmpty && <NotFound searchEmpty={searchEmpty} />}

      </header>
      {todos.length === 0 && <Found />}
      <Todolist todos={todos}
        setTodos={setTodos}
        searchArr={searchArr}
        setSearchArr={setSearchArr}
      />

    </div>
  );
}

export default App;

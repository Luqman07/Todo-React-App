import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

const Textfield = ({todos, setTodos, isEmpty, setIsEmpty, setValidate}) => {
    const [textInput, setTextInput] = useState('')  

    const updateInputHandler = (e) => {
        setTextInput(e.target.value) 
        setIsEmpty(false)  
        setValidate('')   
    }
    const updateTodoHandler = (e) => {
        e.preventDefault()
        if(isEmpty === false){
            setTodos([...todos, {id: uuidv4(), todo: textInput, done: false}])
            setTextInput('')
            setIsEmpty(true)
        }else{
            console.log('hey');
            setValidate('Required*')
        }
       
    }
    return ( 
        <form onSubmit={updateTodoHandler} className="text-field">
            <input value={textInput} onChange={updateInputHandler} placeholder="Add todos" type="text" />
            <button className="add">Add</button>
        </form>
     );
}
 
export default Textfield;
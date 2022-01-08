import {useState, useEffect} from "react";


function Effect() {
    const [todo, setTodo] = useState("");
    const [todos, setTodos] = useState([]);
    const onChange = (event) => {
        setTodo((current) => event.target.value);
    }
    const onSubmit = (event) => {
        event.preventDefault();
        if(todo === ""){
            return;
        }
        setTodos((prev) => [todo, ...prev]);
        console.log("render되기전에는 업데이트가 반영되지 않는다.", todos, todos.length);
        setTodo("");
        
    }
    console.log("render되고나서는 업데이트가 반영된다.", todos, todos.length);
    return (
        <div>
            <form onSubmit={onSubmit}>
                <div>
                    ToDoList Count : {todos.length}
                </div>
                <div>
                    <input onChange={onChange} value={todo} placeholder="type anyword"/>
                    <button>Submit</button>
                </div>
                <ul>
                    {todos.map((item, index) => <li key={index}>{item}</li>)}
                </ul>
            </form>
        </div>
    );
}

export default Effect;

import { useState , useEffect } from 'react';
import List from '@mui/material/List';
import { Box } from '@mui/material';
import TodoItem from './TodoItem';
import TodoForm from './TodoForm';

const getInitialData = () => {
    const data = JSON.parse(localStorage.getItem("todos")) ;
    if(!data){return data ; }
    return data ;
}

export default function TodoList(){
    const [todos , setTodos] = useState(getInitialData) ;

    useEffect( () => {
        localStorage.setItem("todos" , JSON.stringify(todos)) ;
    } , [todos])

    const removeTodo = (id) => {
        setTodos( (prevTodos) => {
            return prevTodos.filter( (t) => t.id !== id ) ;
        }) ;
    }

    const toggleTodo = (id) => {
        setTodos( (prevTodos) => {
            return prevTodos.map( (todo) => {
                if(todo.id === id){return {...todo , completed : !todo.completed} ;}
                else{return todo ;}
            }) ;
        }) ;
    }

    const addTodo = (text) => {
        setTodos( (prevTodos) => {
            return [...prevTodos , {id : crypto.randomUUID() , task : text , completed : false}]
        } )
    }

    return (
        <Box sx={{
            display : 'flex' , 
            justifyContent : 'center' , 
            flexDirection : 'column' ,
            alignItems : 'center' ,  
            m : 3       
        }} >
            <h1>To-Do List</h1>
            <List sx={{ width: '100%', maxWidth: 360}}>
                {todos.map((todo) => (
                    <TodoItem todo={todo} key={todo.id} remove={removeTodo} toggle = {toggleTodo} />
                ))}

                <TodoForm addTodo={addTodo} />
            </List>
        </Box>
        
      );
    
}
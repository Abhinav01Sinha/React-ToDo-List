import TextField from '@mui/material/TextField';
import ListItem from '@mui/material/ListItem';
import Create from '@mui/icons-material/Create'
import { useState } from 'react';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';

export default function TodoForm({addTodo}){
    const [text , setText] = useState("") ;

    const handleInput = (evt) => {
        setText(evt.target.value) ;
    }

    const handleSubmit = (e) => {
        e.preventDefault() ;
        addTodo(text) ;
        setText("") ;
    }

    return (
        <ListItem>
            <form onSubmit={handleSubmit}>
                <TextField 
                    id="filled-basic" 
                    label="New Task" 
                    variant="filled" 
                    value={text} 
                    onChange={handleInput} 
                    InputProps={{
                        endAdornment : (
                            <InputAdornment position="end">
                                <IconButton aria-label="Create ToDo" edge="end" type='submit'>
                                    <Create />
                                </IconButton>
                            </InputAdornment>
                        )
                    }}
                />
            </form>            
        </ListItem>  
        
       
    ) ;

}   
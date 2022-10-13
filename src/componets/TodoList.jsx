import { Button } from '@mui/material'
import React from 'react'

const TodoList = ({ list, remove }) => {
    return (
        <ul id="todo-list">
            {list && list.map((todo, index) =>
                <li key={index}>{todo}
                    <Button id='remove-btn' color='error' onClick={() => remove(todo)}> remove</Button>
                </li>)}
        </ul>
    )
}

export default TodoList
import { Box } from '@mui/material'
import React, { useState } from 'react'
import TodoInput from '../componets/TodoInput'
import TodoList from '../componets/TodoList'

const Todo = () => {

    let [todoList, setTodoList] = useState([])

    const addTodoToLIst = (value) => {
        setTodoList([...todoList, value])
    }
    console.log()
    return (
        <Box sx={{ bgcolor: '#FFF', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
            <TodoInput addTodoToLIst={addTodoToLIst} />
            <TodoList list={todoList} />
        </Box>
    )
}

export default Todo
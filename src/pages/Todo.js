import { Box } from '@mui/material'
import React, { useState, useEffect } from 'react'
import TodoInput from '../componets/TodoInput'
import TodoList from '../componets/TodoList'
import axios from 'axios'

const Todo = () => {


    let [todoList, setTodoList] = useState([])

    const addTodoToLIst = (value) => {
        setTodoList([...todoList, value])
    }
    const removeFromLIst = (value) => {
        setTodoList([...todoList.filter(data => data !== value)])
    }


    // useEffect(() => {
    //     axios.get('http://localhost:3030/todo').then(res => {
    //         console.log(res.data)
    //     })
    // }, [])

    return (
        <Box sx={{ bgcolor: '#FFF', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
            <TodoInput addTodoToLIst={addTodoToLIst} />
            <TodoList list={todoList} remove={removeFromLIst} />
        </Box>
    )
}

export default Todo
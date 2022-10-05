import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'

const TodoInput = ({ addTodoToLIst }) => {

    let [input, handleInput] = useState("")
    return (
        <div>
            <TextField id="todo-input" label="todo" variant="outlined" margin='normal' name='todo' value={input} onChange={(e) => handleInput(e.target.value)} />
            <Button onClick={() => { addTodoToLIst(input); handleInput('') }}>add</Button>
        </div>
    )
}

export default TodoInput
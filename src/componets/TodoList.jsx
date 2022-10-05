import React from 'react'

const TodoList = ({ list }) => {
    return (
        <ul>
            {list && list.map(todo => <li>{todo}</li>)}
        </ul>
    )
}

export default TodoList
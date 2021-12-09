import React from 'react';

const TodoItem = ({item , onDel, onToggle}) => {
    const { id , text, isChecked } = item 
    return (
        <li className={isChecked ? 'on':'' }>
            <span onClick={ () => onToggle(id) }> &#10003; </span>
            <em onClick={ () => onToggle(id) }> {text} </em>
            <button onClick={ () => onDel(id) }>삭제</button>
        </li>
    );
};

export default TodoItem;
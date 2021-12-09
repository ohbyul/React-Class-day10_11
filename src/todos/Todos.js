import React, { useRef, useState } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import './Todos.css'

const Todos = () => {
    const no = useRef(1)
    const [ data, setData] = useState([
        // {id:1, text:'입력입니다.', isChecked: false },      
    ])

    //삭제
    const onDel = ( id )  => {
        setData( data.filter( item => item.id !== id  ))
     }

     //추가
    const onAdd = ( text )  => {
        setData([
            ...data ,
            {
                id: no.current++ ,
                text ,
                isChecked : false 
            }
        ])
    }

    // 갱신
    const onToggle = ( id )  => {
        setData( data.map( item => item.id === id ? 
            {...item , isChecked: !item.isChecked } : item ))
    }

    return (
        <div className="Todos">
            <TodoForm onAdd={onAdd} />
            <TodoList data={data} onDel={onDel} onToggle={onToggle} />
        </div>
    );
};

export default Todos;
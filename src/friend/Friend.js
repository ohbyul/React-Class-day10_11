import React, { useRef, useState } from 'react';
import FriendInput from './FriendInput';
import FriendList from './FriendList';
import datalist from '../assets/api/frienddata'
import './style.css'

const Friend = () => {    
    const [ data , setData ] = useState( datalist )
    const [ isChk , setIsChk ] = useState( false )

    // const no = useRef( 6 )
    const no = useRef( datalist.length + 1  )
    //모두삭제
    const onRemove = ()  => {
        setData([])
    }
    //초기복구
    const onReset = ()  => {
        setData( datalist )
    }
    //삭제
    const onDel = (id)  => { 
        setData( data.filter( item => item.id !== id ))
    }

    //추가
    const onAdd  = ()  => {

    }

    return (
        <div className="wrap">
            <h1>친구들 총인원 : {data.length} </h1>
            <p className="chk">
                <input type="checkbox" checked={ isChk } 
                onChange={ e => setIsChk( e.target.checked )} />
                {
                    isChk ? '추가 비활성' :'추가 활성'
                }                
            </p>

            <FriendList data={data} onDel={onDel} />

            <p className="btn">
                <button onClick={ onRemove }>모두삭제</button>
                <button onClick={ onReset }>초기복구</button>
            </p>

            {
                isChk && <FriendInput onAdd={onAdd} />
            }            
        </div>
    );
};

export default Friend;
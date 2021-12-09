import React, { useState } from 'react';

const FriendInput = ({ onAdd }) => {
    const [ form , setForm ] = useState({
        name:'', age:'', image:''
    })
    const { name , age, image } = form 

    const changeInput  = () => {}

    return (
        <form className="formadd">
            <p>
                <label>이름</label>
                <input type="text" value={name} name="name" onChange={changeInput}/>
            </p>
            <p>
                <label>나이</label>
                <input type="text" value={age} name="age" onChange={changeInput}/>
            </p>
            <p>
                <label>사진</label>
                <input type="text" value={image} name="image" onChange={changeInput}/>
            </p>

            <button>추가</button>

        </form>
    );
};

export default FriendInput;
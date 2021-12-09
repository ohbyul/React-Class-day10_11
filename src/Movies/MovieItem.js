import React from 'react';
import Numeral from "numeral";
import { AiFillCaretUp,AiFillCaretDown,AiOutlineLine } from "react-icons/ai";

const MovieItem = ({item ,onView}) => {
    const{rank ,movieNm,salesAmt,audiCnt,rankInten } = item;
    return (
        <tr onMouseOver ={() => onView(rank)}>
            <td> {rank} </td>
            <td> {movieNm} </td>
            <td> {Numeral(salesAmt).format(0,0)} </td>
            <td> {Numeral(audiCnt).format(0,0)}</td>
            <td> 
                {rankInten > 0 && <AiFillCaretUp style ={{color : 'red'}} /> }
                {rankInten < 0 && <AiFillCaretDown style ={{color : 'blue'}} /> }    
                {rankInten === 0 && <AiOutlineLine /> }    
            </td>
        </tr>
    );
};

export default MovieItem;
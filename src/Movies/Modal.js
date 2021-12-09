import React from 'react';
import { AiOutlineCloseCircle } from "react-icons/ai";

const Modal = ({movie , setIsOpen, onClose}) => {
    const {movieNm , thumbUrl, director } = movie

    return (
        <div className="modal">
            <div className="bg"></div>
            <div className="popup">
                <h3>{movieNm}</h3>
                <div>
                    <img src ={thumbUrl} alt = {movieNm}/>
                </div>
                <strong>감독 : {director}</strong>
                <p className = "more" onClick={ () => setIsOpen(false)} style={{cursor:'pointer'}} >
                {/* <p className = "more" onClick={onClose} >     */}
                {/* p태그 둘다 사용 가능  */}
                    <AiOutlineCloseCircle />
                </p>
            </div>
            
        </div>
    );
};

export default Modal;
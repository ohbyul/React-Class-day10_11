import React, { useState } from 'react';
import './style.css'
import dataList from '../assets/api/movie.json'
import MovieView from './MovieView';
import MovieList from './MovieList';
import Modal from './Modal';

const Movies = () => {
    const [data,setData] = useState(dataList);
    const [movie,setMovie] = useState(data[0]);
    //const [movie,setMovie] = useState(dataList[0]);
    //둘다 사용 가능 
    const [isOpen , setIsOpen] = useState(false)

    const onView = ( id ) => {
        //tr에 마우스를 올리면 movie 값이 변경 
        //setMovie(data[id-1])
        //위에도 가능 
        //find 로 하기 - find로 더 추천 
        setMovie(data.find(item => item.rank ===id))
    }

    const onOpen = () => {
        setIsOpen (true)
    }

    const onClose = () => {
        setIsOpen (false)
    }
    return (
        <div className="gallery">
            <MovieView movie = {movie} onOpen = {onOpen}/>
            <MovieList data={data} onView = {onView}/>
            {
               isOpen && <Modal movie = {movie} onClose={onClose} 
                                                setIsOpen = {setIsOpen} //setter함수도 그대로 넘겨주수 잇다
                /> 
            }
        </div>
    );
};

export default Movies;
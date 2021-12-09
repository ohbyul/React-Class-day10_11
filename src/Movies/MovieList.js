import React from 'react';
import MovieItem from './MovieItem';

const MovieList = ({data , onView}) => {
    
    return (
        <div className = "list">
            <table>
                <colgroup>
                    <col className = 'w1' />
                    <col className = 'w2' />
                    <col className = 'w3' />
                    <col className = 'w4' />
                    <col className = 'w5' />
                </colgroup>
                <thead>
                    <tr>
                        <td>순위</td>
                        <td>영화명</td>
                        <td>매출액</td>
                        <td>관객수</td>
                        <td>증감률</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map( item => < MovieItem key={item.rank} item={item} onView = {onView}/> )
                    }
                </tbody>
            </table>
        </div>
    );
};

export default MovieList;
import React from 'react';
import Numeral from "numeral";
import { AiFillAudio } from "react-icons/ai";
import moment from 'moment';

const Test1 = () => {
  return (
    <div>
           <h1> {Numeral(100000000).format(0,0)}</h1>
           <h1> {Numeral(600000).format(0,0)}</h1>
           <h1> { moment('20211209').format("YYYY.MM.DD") }</h1>
           <h2><AiFillAudio style={{fontSize:40,color:'red'}} /></h2>
           
    </div>
  );
};

export default Test1;
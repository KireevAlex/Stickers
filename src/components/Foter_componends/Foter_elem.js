import React, { useState } from 'react'
import './Foter_elem.css';

export default function Foter_elem() {
  let [data, setDate] = useState(new Date);

  setInterval(getData, 1000)
  function getData(){
    setDate(new Date)
  };

  let elemData = <p className='data'>{data.getDate()}.{data.getMonth()}.{data.getFullYear()}</p>
  let elemTime = <p className='time'>{data.getHours()}:{data.getMinutes()}:{data.getSeconds()}</p>
  return <div className='foter'>
      <>{elemTime}</>
      <>{elemData}</>
  </div>

  
}



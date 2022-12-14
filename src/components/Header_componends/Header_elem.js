import React from 'react'
import './Header_elem.css';

export default function Header_elem() {
  let head = <div className='textHeader'><h1>Your stickers</h1></div>

  return <div className='header'>
      {head}
      <div className='buttonHeader'><a>add stickers</a></div>
  </div>

}

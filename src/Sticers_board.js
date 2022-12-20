import React, { useState } from 'react'
import Footer from './components/Footer'
import Header from './components/Header'
import Stickers from './components/Stickers'
import { nanoid } from 'nanoid'

function id(){
  return nanoid()
}

const list = [
  {id : id(), value:'What do you want to do? ', isRed:false},
  {id : id(), value:'', isRed:false},
]

function Sticers_board() {

const [stickers, setValueSt] = useState(list)



function chengeValueSticker(event, id){
  const arr = stickers.map((e)=>{
    if(e.id == id){
      e.value = event.target.value
    }
    return e
  })
  setValueSt(arr);
}

function deliteSticker(id){
  const arr = []
  stickers.map( e=>{
    if(e.id !== id){
      arr.push(e);
    }
  })
  setValueSt(arr)
}

function createNewSticker(){
  const arr = Object.assign([], stickers);
  const newElem = {id:nanoid(), value:'', isRed:false};
  arr.push(newElem);
  setValueSt(arr);
}


  return <>
  <Header createNewSticker={createNewSticker}/>
  <Stickers 
    stickers={stickers} 
    chengeValueSticker={chengeValueSticker} 
    deliteSticker={deliteSticker}/>
  <Footer/> 
  </>
}

export default Sticers_board

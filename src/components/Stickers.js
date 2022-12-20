import React from 'react'
import Redax_sticker from './Sticker_componends/Redax_sticker'

export default function Stickers({stickers, chengeValueSticker, deliteSticker}) {
  return <div>
      <Redax_sticker 
        stickers={stickers} 
        chengeValueSticker={chengeValueSticker}
        deliteSticker= {deliteSticker} />
    </div>
}

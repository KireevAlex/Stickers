import React, { useState } from "react";
import "./Redax_sticker.css";

export default function Redax_sticker({
  stickers,
  chengeValueSticker,
  deliteSticker,
}) {
  const items = stickers.map((e) => {
    return (
      <div key={e.id} className="sticker">
        <button
          className="buttonStyle"
          onClick={() => {
            deliteSticker(e.id);
          }}
        >
          X
        </button>
        <textarea
          className="textariaStyle"
          key={e.id}
          value={e.value}
          onChange={(event) => chengeValueSticker(event, e.id)}
        ></textarea>
      </div>
    );
  });

  return <div className="body">{items}</div>;
}

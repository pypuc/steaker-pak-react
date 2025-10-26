import React from "react";
import Sticker from "./Sticker";

function StickerList({ stickers, onSelect }) {
  return (
    <div className="sticker_list">
      {stickers.map((s, index) => (
        <Sticker key={index} data={s} onClick={() => onSelect(s.label)} />
      ))}
    </div>
  );
}

export default StickerList;

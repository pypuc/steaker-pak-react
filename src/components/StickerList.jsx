import stickers from "../stickers.json";
import Sticker from "./Sticker";
import { ListWrapper } from "./StickerList.styled";

export default function StickerList({ onSelect }) {
  return (
    <ListWrapper>
      {stickers.map((item) => (
        <Sticker
          key={item.label}
          img={item.img}
          label={item.label}
          onClick={onSelect}
        />
      ))}
    </ListWrapper>
  );
}

import { Wrapper, Img } from "./Sticker.styled";

export default function Sticker({ img, label, onClick }) {
  return (
    <Wrapper onClick={() => onClick(label)}>
      <Img src={img} alt={label} />
      <p>{label}</p>
    </Wrapper>
  );
}

import { Box } from "./Choice.styled";

export default function Choice({ selected }) {
  return <Box>твій вибір: {selected || "нічого не обрано"}</Box>;
}

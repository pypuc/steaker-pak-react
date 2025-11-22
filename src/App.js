import { Component } from "react";
import StickerList from "./components/StickerList";
import Choice from "./components/Choice";

class App extends Component {
  state = {
    selectedSticker: "",
  };

  setSelectedSticker = (label) => {
    this.setState({ selectedSticker: label });
  };

  render() {
    const { selectedSticker } = this.state;

    return (
      <>
        <h1>Sticker App</h1>

        <StickerList onSelect={this.setSelectedSticker} />

        <Choice selected={selectedSticker} />
      </>
    );
  }
}

export default App;

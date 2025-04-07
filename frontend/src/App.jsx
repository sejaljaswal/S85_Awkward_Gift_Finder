import "./App.css";
import GiftCard from "./components/GiftCard";

function App() {
  const dummyGift = {
    name: "Meme Mug",
    price: 299,
    category: "Funny",
    description: "A mug with iconic meme faces. Awkward laughs guaranteed."
  };

  return (
    <div className="app-container">
      <GiftCard gift={dummyGift} />
    </div>
  );
}

export default App;

import { useEffect, useState } from "react";
import axios from "axios";
import GiftCard from "./GiftCard"; // your existing card component

const GiftList = () => {
  const [gifts, setGifts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5001/api/gifts")
      .then(response => setGifts(response.data))
      .catch(error => console.error("Error fetching gifts:", error));
  }, []);

  return (
    <div className="flex flex-wrap gap-6 justify-center p-6">
      {gifts.map((gift) => (
        <GiftCard key={gift._id} gift={gift} />
      ))}
    </div>
  );
};

export default GiftList;

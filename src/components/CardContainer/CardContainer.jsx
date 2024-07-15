import { useEffect, useState } from "react";
import Card from "../Card/Card";

const CardContainer = () => {
  const [cards, setCards] = useState([]);
  useEffect(() => {
    fetch("donation.json")
      .then((data) => data.json())
      .then((data) => setCards(data));
  }, []);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {cards.map((card) => (
        <Card donation={card} key={card.id}></Card>
      ))}
    </div>
  );
};

export default CardContainer;

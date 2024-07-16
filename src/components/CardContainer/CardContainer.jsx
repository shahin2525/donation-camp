import { useEffect, useState } from "react";
import Card from "../Card/Card";

import PropTypes from "prop-types";
const CardContainer = ({ inputValue }) => {
  const [cards, setCards] = useState([]);
  const [filterCards, seTFilterCards] = useState([]);

  useEffect(() => {
    if (inputValue === "") {
      seTFilterCards(cards);
    } else {
      const category = cards.filter(
        (card) => card.category.toLowerCase() === inputValue.toLowerCase()
      );
      seTFilterCards(category);
    }
  }, [inputValue, cards]);

  useEffect(() => {
    fetch("donation.json")
      .then((data) => data.json())
      .then((data) => {
        setCards(data);
        seTFilterCards(data);
      });
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {filterCards.map((card) => (
        <Card donation={card} key={card.id}></Card>
      ))}
    </div>
  );
};

CardContainer.propTypes = {
  inputValue: PropTypes.string,
};

export default CardContainer;

import React from "react";

export default function Hand(props) {
  console.log("I'm here!");
  const cards = props.cards;

  const allCards = cards.map((card, index) => {
    <li key={index}>
      <h4>{card.face}</h4>
      <h4>{card.suite}</h4>
    </li>
  });

  const noCards = (
    <div></div>
  )

  return (
    <ul>
      {cards.length > 0 ? allCards : noCards}
    </ul>
  );
}

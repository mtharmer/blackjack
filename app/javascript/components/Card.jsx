import React from "react";

export default function Card({setCard}) {
  const card = setCard;

  const cardName = `${card.face.toLowerCase()}_of_${card.suite}.png`

  return (
    <div className="card">
      <img src={`/images/${cardName}`} />
    </div>
  );
}

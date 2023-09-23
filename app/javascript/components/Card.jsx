import React from "react";

export default function Card({setCard}) {
  const card = setCard;

  return (
    <div className="card">
      <img src={`/images/${card.name}.png`} />
    </div>
  );
}

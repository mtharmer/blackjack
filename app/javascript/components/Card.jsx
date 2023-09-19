import React from "react";

export default function Card({setCard}) {
  const card = setCard;
  console.log("Class:Card - card", card);

  return (
    <div className="card">
      <h4>{card.face} {card.suite}</h4>
    </div>
  );
}

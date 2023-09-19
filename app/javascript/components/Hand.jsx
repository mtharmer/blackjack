import React from "react";
import Card from "./Card";

export default function Hand({player}) {
  const cards = (player.cards) ? player.cards : [];
  var sum = 0;
  var altSum = 0;
  var score = cards.reduce((acc, cur) => acc + cur.value, sum);
  var altScore = cards.reduce((acc, cur) => acc + ((cur.alternate_value > 0) ? cur.alternate_value : cur.value), altSum)
  console.log("Class:Hand - Player Cards", cards);
  console.log("Class:Hand - score", score);
  console.log("Class:Hand - alt score", altScore);

  if (cards.length <= 0) {
    return (
      <div className="col-lg-3">
        <h5>No Cards</h5>
      </div>
    );
  }

  const allCards = cards.map((card, index) => {
    return (
      <div key={index} className="col-lg-1">
        <Card setCard={card} />
      </div>
    );
  });

  var usableScore;
  if (score == altScore && score <= 21) {
    usableScore = `${score}`;
  } else if (score > 21 && altScore <= 21) {
    usableScore = `${altScore}`;
  } else if (score <= 21 && altScore <= 21) {
    usableScore = `${score} / ${altScore}`;
  } else {
    usableScore = "Bust!"
  }

  return (
    <div>
      <div className="row">
        {allCards}
      </div>
      <h5>Score: {usableScore}</h5>
    </div>
  );
}

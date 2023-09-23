import React from "react";
import scoreHelper from "../helpers/scoreHelper";
import Hand from "./Hand";

export default function Dealer({cards}) {
  // const dealerCards = cards;

  if (!cards) {
    return (
      <div>
        <p>Waiting for dealer...</p>
      </div>
    )
  }

  const score = scoreHelper(cards);

  return (
    <>
      <Hand cards={cards} score={score} />
    </>
  )
}

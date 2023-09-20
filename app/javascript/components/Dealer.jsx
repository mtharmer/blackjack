import React from "react";
import scoreHelper from "../helpers/scoreHelper";
import Hand from "./Hand";

export default function Dealer({setDealer}) {
  const dealer = setDealer;

  if (!dealer) {
    return (
      <div>
        <p>Waiting for dealer...</p>
      </div>
    )
  }

  const score = scoreHelper(dealer.cards);

  return (
    <>
      <Hand player={dealer} score={score} />
    </>
  )
}

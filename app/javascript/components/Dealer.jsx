import React from "react";
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

  return (
    <>
      <Hand player={dealer} />
    </>
  )
}

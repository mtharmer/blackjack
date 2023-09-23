import React from "react";
import Card from "./Card";

export default function Hand({cards, score}) {
  // const cards = (cards) ? cards : [];

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

  return (
    <div className="container">
      <div className="row m-4 justify-content-center">
        <div className="col-lg-1">
          <h3 className="text-center align-middle border rounded-circle">
            {score}
          </h3>
        </div>
        <div className="w-100"></div>
        {allCards}
      </div>
    </div>
  );
}

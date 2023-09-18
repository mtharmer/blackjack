import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useEffectHelper from "../helpers/useEffectHelper";
import Hand from "./Hand";

export default function Table() {
  const params = useParams();
  const [table, setTable] = useState({});
  const [shoe, setShoe] = useState([]);
  const [hands, setHands] = useState([{name: "Player 1", cards: []}]);

  useEffectHelper(`/api/v1/table/${params.id}`, setTable, [params.id]);
  useEffectHelper('/api/v1/shoe/new', setShoe);

  var workingShoe = [...shoe];
  var workingHands = [...hands];

  const dealCards = () => {
    // burn();
  };

  const burn = () => {
    const newShoe = [...shoe];
    setShoe(newShoe.slice(1));
  };

  function dealCard(shoe) {
    const newCard = shoe[0];
    return [newCard, shoe.slice(1)]
  }

  useEffect(() => {
    workingShoe = shoe;
  }, [shoe]);

  useEffect(() => {
    workingHands = hands;
  }, [hands]);

  function dealInitialHand() {
    for (let i = 0; i <= 1; i++) {
      workingHands.forEach((hand) => {
        [newCard, workingShoe] = dealCard(workingShoe);
        hand.cards.push(newCard);
      });
    }

    setShoe(workingShoe);
    setHands(workingHands);
  }

  const showPlayers = workingHands.map((hand, index) => {
    <div key={index} className="card">
      <Hand cards={hand.cards} />
    </div>
  });

  return (
    <div className="container">
      <div className="row">
        <h4>Dealer's Cards</h4>
      </div>
      <div className="row">
        <h4>Your Cards</h4>
      </div>
      <div className="row">
        {showPlayers}
        {/* <ul>
          {hands.map(player => (
            <li key={player.name}>
              <ul>
                {player.cards.map(card => (
                  <li key={card.id}>{card.face} {card.suite}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul> */}
      </div>
      <button className="btn btn-primary" onClick={dealInitialHand}>New Deal</button>
      <button className="btn btn-primary" onClick={dealCards}>Next Card</button>
    </div>
  );
}

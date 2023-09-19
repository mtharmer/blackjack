import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Players from "./Players";
import Dealer from "./Dealer";
import getTable from "../actions/getTable";
import joinTable from "../actions/joinTable";
import { dealHand } from "../actions/dealHand";
import playerHit from "../actions/playerHit";

export default function Table() {
  const params = useParams();
  const [table, setTable] = useState({});
  const [players, setPlayers] = useState([]);
  const [dealer, setDealer] = useState({cards: []});

  function setData(body) {
    setTable(body.table);
    setPlayers(body.players);
    setDealer(body.dealer);
  }

  useEffect(() => getTable(params.id, setData), [params.id]);

  const join = () => joinTable(params.id, 'someuser', setData);

  const hit = () => playerHit(params.id, 'someuser', setData);

  const dealInitialHand = () => dealHand(params.id, setData);

  return (
    <div>
      <div className="row mb-4 mt-4">
        <div className="col-4 offset-4">
          <div className="row">
            {/* <h5>Shoe Size: {table.shoe.cards.length}</h5> */}
          </div>
        </div>
      </div>
      <div className="row mt-4 mb-4">
        <h4>Dealer's Cards</h4>
        <Dealer setDealer={dealer} />
      </div>
      <div className="row mt-4 mb-4">
        <h4>Players</h4>
        <Players items={players} />
      </div>
      <button className="btn btn-primary m-2" onClick={dealInitialHand}>New Deal</button>
      <button className="btn btn-primary m-2" onClick={join}>Join</button>
      <button className="btn btn-primary m-2" onClick={hit}>Hit</button>
    </div>
  );
}

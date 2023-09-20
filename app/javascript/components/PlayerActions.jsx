import React from "react";
import { dealHand } from "../actions/dealHand";
import playerDoubleDown from "../actions/playerDoubleDown";
import playerHit from "../actions/playerHit";
import playerSplit from "../actions/playerSplit";
import playerStand from "../actions/playerStand";

export default function PlayerActions({player, score, callback}) {
  const tableId = player.table_id.$oid;
  const username = player.username;
  const cards = player.cards;
  const dealFunc = () => dealHand(tableId, callback);
  const hitFunc = () => playerHit(tableId, username, callback);
  const standFunc = () => playerStand(tableId, username, callback);
  const splitCardsFunc = () => playerSplit(tableId, username, callback);
  const doubleDownFunc = () => playerDoubleDown(tableId, username, callback);

  const canDeal = score <= 0 || score > 21;
  const firstCards = cards.length === 2;
  const canSplit = firstCards && cards[0].value === cards[1].value;

  return (
    <div className="row justify-content-center">
      <div className="col-lg-1">
        <button className={`btn ${canDeal ? 'btn-primary' : 'btn-secondary'} m-2 w-100`} disabled={!canDeal} onClick={dealFunc}>
          Deal
        </button>
      </div>
      <div className="col-lg-1">
        <button className={`btn ${!canDeal ? 'btn-primary' : 'btn-secondary'} m-2 w-100`} disabled={canDeal} onClick={hitFunc}>
          Hit
        </button>
      </div>
      <div className="col-lg-1">
        <button className={`btn ${!canDeal ? 'btn-primary' : 'btn-secondary'} m-2 w-100`} disabled={canDeal} onClick={standFunc}>
          Stand
        </button>
      </div>
      <div className="col-lg-1">
        <button className={`btn ${canSplit ? 'btn-primary' : 'btn-secondary'} m-2 w-100`} disabled={!canSplit} onClick={splitCardsFunc}>
          Split
        </button>
      </div>
      <div className="col-lg-1">
        <button className={`btn ${firstCards ? 'btn-primary' : 'btn-secondary'} m-2 w-100`} disabled={!firstCards} onClick={doubleDownFunc}>
          Double
        </button>
      </div>
    </div>
  )
}

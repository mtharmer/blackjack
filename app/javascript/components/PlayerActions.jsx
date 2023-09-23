import React from "react";
import { GameActions, TableActions } from "../actions";

export default function PlayerActions({player, score}) {
  const tableId = player.table_id;
  const username = player.username;
  const cards = player.cards;
  const leaveFunc = () => GameActions.playerLeave(username);

  const canDeal = score <= 0 || score > 21;
  const firstCards = cards.length === 2;
  const canSplit = firstCards && cards[0].value === cards[1].value;

  const actions = [
    {text: "Deal", enabled: canDeal, func: () => {TableActions.dealHand(tableId)}},
    {text: "Hit", enabled: !canDeal, func: () => {GameActions.playerHit(tableId, username)}},
    {text: "Stand", enabled: !canDeal, func: () => {GameActions.playerStand(tableId, username)}},
    // TODO: enable these options after the functionality exists
    // {text: "Split", enabled: canDeal, func: GameActions.playerSplit(tableId, username)},
    // {text: "Double", enabled: canDeal, func: GameActions.playerDoubleDown(tableId, username)}
  ];

  const showActions = actions.map((action, index) => {
    return (
      <div key={index} className="col-lg-1">
        <button className={`btn ${action.enabled ? 'btn-primary' : 'btn-secondary'} m-2 w-100`}
          disabled={!action.enabled}
          onClick={() => {action.func()}}>
          {action.text}
        </button>
      </div>
    );
  });

  return (
    <div className="row justify-content-center">
      {showActions}
      <div className="col-lg-1">
        <button className="btn btn-primary m-2 w-100" onClick={leaveFunc}>
          Leave
        </button>
      </div>
    </div>
  )
}

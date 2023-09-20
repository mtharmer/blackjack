import React from "react";
import scoreHelper from "../helpers/scoreHelper";
import Hand from "./Hand";
import PlayerActions from "./PlayerActions";

export default function Players({items, callback}) {
  const players = (items) ? items : [];

  if (!players || players.length <= 0) {
    return (
      <div>
        <h4>No Players!</h4>
      </div>
    );
  }

  const showPlayers = players.map((player, index) => {
    const score = scoreHelper(player.cards);
    return (
      <div key={index} className="col">
        <h4>Player: {player.username}</h4>
        <Hand player={player} score={score} />
        <PlayerActions player={player} score={score} callback={callback}/>
      </div>
    );
  });

  return (
    <div>
      <p># of Players: {players.length}</p>
      <div>
        {showPlayers}
      </div>
    </div>
  )
}

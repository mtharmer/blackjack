import React from "react";
import Hand from "./Hand";

export default function Players({items}) {
  const players = (items) ? items : [];
  console.log("Class:Players - players", players);

  if (!players || players.length <= 0) {
    return (
      <div>
        <h4>No Players!</h4>
      </div>
    );
  }

  const showPlayers = players.map((player, index) => {
      return (
        <div key={index} className="col">
          <h4>Player: {player.username}</h4>
          <Hand player={player} />
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

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Players from "./Players";
import Dealer from "./Dealer";
import getTable from "../actions/getTable";
import joinTable from "../actions/joinTable";
import { dealHand } from "../actions/dealHand";
import consumer from "../channels/consumer";

export default function Table() {
  const params = useParams();
  const [table, setTable] = useState({});
  const [players, setPlayers] = useState([]);
  const [dealer, setDealer] = useState({cards: []});

  // TODO: break these into individual requests rather than one large request
  function setData(body) {
    setTable(body.table);
    setPlayers(body.players);
    setDealer(body.dealer);
  }

  function updatePlayer(player) {
    setPlayers(prevPlayers => {
      return prevPlayers.map((pl) => {
        if (pl._id.$oid == player._id.$oid) {
          return player;
        } else {
          return pl;
        }
      });
    });
  }

  useEffect(() => {
    consumer.subscriptions.create({channel: "UpdatesChannel", model: "table", id: params.id, type: "base"}, {
      connected() { console.log("Table:base connected"); },

      disconnected() { console.log("Table disconnected"); },

      received(data) { console.log("base", data); }
    });

    consumer.subscriptions.create({channel: "UpdatesChannel", model: "table", id: params.id, type: "player"}, {
      connected() { console.log("Table:player connected"); },

      disconnected() { console.log("Table disconnected"); },

      received(data) {
        console.log("redis:player", data);
        updatePlayer(data);
      }
    });
  }, [params.id]);

  // TODO: remove the callback down to the player actions and relace with either redux actions or redis pub/sub
  playerActionCallback = () => getTable(params.id, setData);

  useEffect(() => getTable(params.id, setData), [params.id]);

  const join = () => joinTable(params.id, 'someuser', setData);

  const dealInitialHand = () => dealHand(params.id, setData);

  return (
    <div className="container">
      <div className="row mt-4 mb-4">
        <h4>Dealer's Cards</h4>
        <Dealer setDealer={dealer} />
      </div>
      <div className="row mt-4 mb-4">
        <h4>Players</h4>
        <Players items={players} callback={playerActionCallback} />
      </div>
      <button className="btn btn-primary m-2" onClick={dealInitialHand}>New Deal</button>
      <button className="btn btn-primary m-2" onClick={join}>Join</button>
    </div>
  );
}

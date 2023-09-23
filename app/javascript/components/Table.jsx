import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Players from "./Players";
import Dealer from "./Dealer";
import getTable from "../actions/getTable";
import joinTable from "../actions/joinTable";
import consumer from "../channels/consumer";

export default function Table() {
  const params = useParams();
  const [table, setTable] = useState({});
  const [players, setPlayers] = useState([]);
  const [dealerCards, setDealer] = useState([]);
  const [isJoined, setIsJoined] = useState(false);

  // TODO: break these into individual requests rather than one large request
  function setData(body) {
    console.log("body", body);
    setTable(body.table);
    setPlayers(body.players.map((pl) => {
      console.log(pl);
      console.log(body.player_cards);
      if (body.player_cards) {
        pl.cards = body.player_cards.filter(card => card.cardable_id === pl.id);
      } else {
        pl.cards = [];
      }
      return pl;
    }));
    setDealer(body.dealer_cards);
  }

  useEffect(() => {
    if (players.find(pl => pl.username === 'someuser')) {
      setIsJoined(true);
    } else {
      setIsJoined(false);
    }
  }, [players]);

  // function playerUpdated(player) {
  //   setPlayers(prevPlayers => prevPlayers.map(pl => (pl.username === player.username) ? player : pl));
  // }
  function playerHit(card) {
    console.log("card", card);
    setPlayers(prevPlayers => prevPlayers.map(pl => {
      if (pl.id === card.cardable_id) {
        console.log("matched player", pl);
        pl.cards.push(card);
      }
    }));
  }

  function playerJoined(player) {
    setPlayers(prevPlayers => [...prevPlayers, player]);
  }

  function playerLeft(username) {
    setPlayers(prevPlayers => prevPlayers.filter(pl => pl.username !== username));
  }

  useEffect(() => {
    consumer.subscriptions.create({channel: "UpdatesChannel", model: "table", id: params.id, type: "base"}, {
      connected() { console.log("table:base connected"); },
      disconnected() { console.log("table:base disconnected"); },
      received(data) {
        console.log("table:base received", data);
        setData(data);
      }
    });

    consumer.subscriptions.create({channel: "UpdatesChannel", model: "table", id: params.id, type: "player-hit"}, {
      connected() { console.log("table:player connected"); },
      disconnected() { console.log("table:player disconnected"); },
      received(data) {
        console.log(data);
        playerHit(data);
      }
    });

    consumer.subscriptions.create({channel: "UpdatesChannel", model: "table", id: params.id, type: "join"}, {
      connected() { console.log("table:join connected"); },
      disconnected() { console.log("table:join disconnected"); },
      received(data) {
        console.log("table:join received", data);
        playerJoined(data);
      }
    });

    consumer.subscriptions.create({channel: "UpdatesChannel", model: "table", id: params.id, type: "leave"}, {
      connected() { console.log("table:leave connected"); },
      disconnected() { console.log("table:leave disconnected"); },
      received(data) { playerLeft(data); }
    });

    consumer.subscriptions.create({channel: "UpdatesChannel", model: "table", id: params.id, type: "dealer"}, {
      connected() { console.log("table:dealer connected"); },
      disconnected() { console.log("table:dealer disconnected"); },
      received(data) {
        console.log("table:dealer received", data);
        setDealer(data);
      }
    });
  }, [params.id]);

  // TODO: remove the callback down to the player actions and relace with either redux actions or redis pub/sub

  useEffect(() => getTable(params.id, setData), [params.id]);

  const join = () => joinTable(params.id, 'someuser');

  return (
    <div className="container">
      <div className="row mt-4 mb-4">
        <h4>Dealer's Cards</h4>
        <Dealer cards={dealerCards} />
      </div>
      <div className="row mt-4 mb-4">
        <h4>Players</h4>
        <Players items={players} />
      </div>
      <button className="btn btn-primary m-2" hidden={isJoined} onClick={join}>Join</button>
    </div>
  );
}

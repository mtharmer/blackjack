import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Players from "./Players";
import Dealer from "./Dealer";
// import getTable from "../actions/getTable";
// import joinTable from "../actions/joinTable";
import consumer from "../channels/consumer";
import { TableActions } from "../actions";

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
      pl.cards = (body.player_cards) ? body.player_cards.filter(card => card.cardable_id === pl.id) : [];
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

  // TODO: Add methods to distribute cards to the dealer
  function dealerHits(cards) {
    setDealer(prevCards => [...prevCards, ...cards]);
  }

  // TODO: After dealer has received cards, inform the users of the game result
  function decideGame(data) {

  }

  function playerHit(card) {
    setPlayers(prevPlayers => prevPlayers.map(pl => {
      if (pl.id === card.cardable_id) pl.cards.push(card);
      return pl;
    }));
  }

  function playerJoined(player) {
    setPlayers(prevPlayers => [...prevPlayers, player]);
  }

  function playerLeft(username) {
    setPlayers(prevPlayers => prevPlayers.filter(pl => pl.username !== username));
  }

  useEffect(() => {
    TableActions.getTable(params.id, setData);

    consumer.subscriptions.create({channel: "UpdatesChannel", model: "table", id: params.id, type: "base"}, {
      received(data) {
        console.log("table:base received", data);
        setData(data);
      }
    });

    consumer.subscriptions.create({channel: "UpdatesChannel", model: "table", id: params.id, type: "player-hit"}, {
      received(data) {
        console.log("table:player-hit received", data);
        playerHit(data);
      }
    });

    consumer.subscriptions.create({channel: "UpdatesChannel", model: "table", id: params.id, type: "join"}, {
      received(data) {
        console.log("table:join received", data);
        playerJoined(data);
      }
    });

    consumer.subscriptions.create({channel: "UpdatesChannel", model: "table", id: params.id, type: "leave"}, {
      received(data) { playerLeft(data); }
    });

    consumer.subscriptions.create({channel: "UpdatesChannel", model: "table", id: params.id, type: "dealer"}, {
      received(data) {
        console.log("table:dealer received", data);
        setDealer(data);
      }
    });
  }, [params.id]);

  // TODO: remove the callback down to the player actions and relace with either redux actions or redis pub/sub

  const join = () => TableActions.joinTable(params.id, 'someuser', 1000.00);

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

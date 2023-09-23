export function playerHit(tableId, username, callback) {
  url = `/api/v1/player/${username}/hit`
  fetch(url)
  .catch((err) => console.log(url, err.message));
}

export function playerStand(tableId, username, callback) {

}

export function playerSplit(tableId, username, callback) {

}

export function playerDoubleDown(tableId, username, callback) {

}

export function playerLeave(username) {
  url = `/api/v1/player/${username}/leave`
  fetch(url).catch((err) => console.log(err.message));
}

export function playerHit(username) {
  const url = `/api/v1/player/${username}/hit`
  fetch(url)
  .catch((err) => console.log(url, err.message));
}

// export function playerStand(username) {
// }

// export function playerSplit(username) {
// }

// export function playerDoubleDown(username) {
// }

export function playerLeave(username) {
  const url = `/api/v1/player/${username}/leave`
  fetch(url).catch((err) => console.log(err.message));
}

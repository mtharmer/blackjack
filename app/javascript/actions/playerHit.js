export default function playerHit(tableId, username, callback) {
  url = `/api/v1/player/${username}/hit`
  fetch(url)
  .catch((err) => console.log(url, err.message));
}

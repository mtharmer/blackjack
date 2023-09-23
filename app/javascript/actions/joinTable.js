export default function joinTable(tableId, username) {
  url = `/api/v1/player/${username}/join/${tableId}`
  fetch(url)
  .catch((err) => console.log(url, err.message));
}

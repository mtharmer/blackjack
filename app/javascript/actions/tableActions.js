export function getTable(tableId, callback) {
  url = `/api/v1/table/${tableId}`;
  fetch(url)
  .then((res) => {
    if (res.ok) {
      return res.json();
    }
    throw new Error("Error getting table data");
  })
  .then((res) => callback(res))
  .catch((err) => console.log(url, err.message));
}

export function joinTable(tableId, username) {
  url = `/api/v1/player/${username}/join/${tableId}`
  fetch(url)
  .catch((err) => console.log(url, err.message));
}

export function dealHand(tableId) {
  url = `/api/v1/table/${tableId}/deal`
  fetch(url)
  .catch((err) => console.log(url, err.message));
}

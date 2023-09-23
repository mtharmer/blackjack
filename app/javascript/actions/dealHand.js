export function dealHand(tableId) {
  url = `/api/v1/table/${tableId}/deal`
  fetch(url)
  .catch((err) => console.log(url, err.message));
}

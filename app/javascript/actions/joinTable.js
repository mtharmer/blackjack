export default function joinTable(tableId, username, callback) {
  url = `/api/v1/table/${tableId}/join/${username}`
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

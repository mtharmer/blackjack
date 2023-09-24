export function getTable(tableId, callback) {
  const url = `/api/v1/table/${tableId}`;
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

export function getTableList(tableId, callback) {
  const url = `/api/v1/tables/${tableId}`;
  fetch(url)
  .then((res) => {
    if (res.ok) {
      return res.json()
    }
    throw new Error("Error loading tables");
  })
  .then((res) => callback(res))
  .catch((err) => console.log(err.message))
}

export function getTableTypeList(callback) {
  const url = '/api/v1/table_types/index';
  fetch(url)
  .then((res) => {
    if (res.ok) {
      return res.json()
    }
    throw new Error("Error loading tables");
  })
  .then((res) => callback(res))
  .catch((err) => console.log(err.message))
}

export function joinTable(tableId, username, balance) {
  const url = `/api/v1/player/${username}/join?table=${tableId}&balance=${balance}`
  fetch(url)
  .catch((err) => console.log(url, err.message));
}

export function dealHand(tableId) {
  const url = `/api/v1/table/${tableId}/deal`
  fetch(url)
  .catch((err) => console.log(url, err.message));
}

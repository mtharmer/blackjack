export default function playerLeave(username) {
  url = `/api/v1/player/${username}/leave`
  fetch(url).catch((err) => console.log(err.message));
}

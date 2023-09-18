import React, { useEffect } from "react";

export default function useEffectHelper(url, callback, params = []) {
  return useEffect(() => {
    fetch(url)
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      throw new Error("Error getting table data");
    })
    .then((res) => callback(res))
    .catch((err) => console.log(err.message));
  }, params);
}

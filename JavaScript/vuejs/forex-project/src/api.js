const url = "https://api.coincap.io/v2/";

function getAssets() {
  return fetch(`${url}assets?limit=20`)
    .then((r) => r.json())
    .then((r) => r.data);
}

function getAsset(coin) {
  return fetch(`${url}assets/${coin}`)
    .then((r) => r.json())
    .then((r) => r.data);
}

function getAssetHistory(coin) {
  const now = new Date();
  const end = now.getTime();
  now.setDate(now.getDate() - 1);
  const start = now.getTime();

  return fetch(
    `${url}assets/${coin}/history?interval=h1&start=${start}&end=${end}`
  )
    .then((r) => r.json())
    .then((r) => r.data);
}

function getMarkets(coin) {
  return fetch(`${url}assets/${coin}/markets?limit=5`)
    .then((r) => r.json())
    .then((r) => r.data);
}

function getExchange(id) {
  return fetch(`${url}exchanges/${id}`)
    .then((r) => r.json())
    .then((r) => r.data);
}

export default {
  getAssets,
  getAsset,
  getAssetHistory,
  getMarkets,
  getExchange,
};

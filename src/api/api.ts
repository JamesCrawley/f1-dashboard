const getUrl = (path: string) =>
  window.location.hostname === "crawley.dev"
    ? path
    : `http://localhost:8080/api${path}`;

export const get = (path: string) => {
  return fetch(getUrl(path), {
    method: "GET",
  });
};

export const post = (path: string, body: object) => {
  return fetch(getUrl(path), {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(body),
  });
};

export const get = (path: string) => {
  return fetch(path, {
    method: "GET",
  });
};

export const post = (path: string, body: object) => {
  return fetch(path, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(body),
  });
};

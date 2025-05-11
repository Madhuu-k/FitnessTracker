// callApi utility for making API requests
export function callApi(reqMethod, url, data, responseHandler) {
  fetch(url, {
    method: reqMethod,
    headers: { 'Content-Type': 'application/json' },
    body: reqMethod !== 'GET' ? JSON.stringify(data) : undefined,
  })
    .then(async (res) => {
      let responseData;
      try {
        responseData = await res.json();
      } catch {
        responseData = null;
      }
      responseHandler(res, responseData);
    })
    .catch((err) => {
      responseHandler(null, null, err);
    });
}
export async function getRequest(url: RequestInfo | URL) {
  const response = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  return response;
}

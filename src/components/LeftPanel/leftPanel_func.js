export async function getLocationInfo() {
  const url = "https://ipinfo.io/json?token=d016afa8c0e498";
  const response = await fetch(url);
  const myJson = await response.json();
  return myJson;
}
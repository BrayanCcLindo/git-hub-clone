const BASE_API = "https://api.github.com";

async function fetchWrap(url, option) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(
      `Error fetching repositories, status code: ${response.status}`
    );
  }
  const data = await response.json();
  return { data };
}
export async function getUser(username) {
  return fetchWrap(`${BASE_API}/users/${username}`);
}
export async function getRepos(username) {
  return fetchWrap(`${BASE_API}/users/${username}/repos`);
}

export const gitHubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/affan818");
  return response.json();
};

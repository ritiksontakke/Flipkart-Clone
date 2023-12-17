export const getCategoriesService = async () => {
  let url = "http://localhost:3001/categories";
  let response = await fetch(url, { method: "GET" });
  return response.json()
};

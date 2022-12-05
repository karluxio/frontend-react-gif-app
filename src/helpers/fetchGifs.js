export const fetchGifs = async (category) => {
  const apiKey = "jdvZMbDstUoUU74RPdsakdWajFgXfFIh"
  const baseUrl = "https://api.giphy.com/v1/gifs/search"
  const url = `${baseUrl}?api_key=${apiKey}&q=${category}&limit=5`


  const resp = await fetch(url)
  const { data } = await resp.json()
  return data
}
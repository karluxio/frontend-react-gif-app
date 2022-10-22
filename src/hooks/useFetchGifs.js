import { useEffect, useState } from "react"

export const useFetchGifs = (category) => {

  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {

    const getGifs = (async () => {
      const apiKey = "jdvZMbDstUoUU74RPdsakdWajFgXfFIh"
      const baseUrl = "https://api.giphy.com/v1/gifs/search"
      const url = `${baseUrl}?api_key=${apiKey}&q=${category}&limit=5`

      try {
        const resp = await fetch(url)
        const { data } = await resp.json()
        setData(data)
        setLoading(false)
        setError(false)
      } catch (error) {
        setError(true)
      }
    })()
  }, [])

  return {
    data, loading, error
  }
}

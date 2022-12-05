import { useEffect, useState } from "react"
import { fetchGifs } from "../helpers/fetchGifs"

export const useFetchGifs = (category) => {

  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(true)

  const getGifs = async () => {
    const gifsFromApi = await fetchGifs(category)

    setData(gifsFromApi)
    setLoading(false)
    setError(false)
  }

  useEffect(() => {
    getGifs()
  }, [])

  return {
    data, loading, error
  }
}

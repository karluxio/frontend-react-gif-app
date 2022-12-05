import { fetchGifs } from "../../src/helpers/fetchGifs"

describe('testing on fetchGifs.js', () => {
  test("should return gifs array", async () => {
    const gifs = await fetchGifs("Goku")

    expect(gifs.length).toBeGreaterThan(0)
    expect(gifs[0]).toEqual({
      id: expect.any(String),
      title: expect.any(String),
      url: expect.any(String)
    })
  })
})
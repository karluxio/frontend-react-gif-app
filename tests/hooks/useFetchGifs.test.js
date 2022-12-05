import { renderHook, waitFor } from "@testing-library/react"
import { useFetchGifs } from "../../src/hooks/useFetchGifs"

describe('testing on useFetchGifs', () => {
  test('should return initial state', () => {
    const { result } = renderHook(() => useFetchGifs('Goku'))
    const { images, isLoading } = result.current

    expect(images.length).toBe(0)
    expect(isLoading).toBeTruthy()
  })

  test('should return array of images and isLoading as false', async () => {
    const { result } = renderHook(() => useFetchGifs('Goku'))

    await waitFor(
      () => expect(result.current.images.length).toBeGreaterThan(0),
      { timeout: 2000 }
    )

    const { images, isLoading } = result.current

    expect(images.length).toBeGreaterThan(0)
    expect(isLoading).toBeFalsy()
  })
})
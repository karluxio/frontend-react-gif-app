import { render, screen } from "@testing-library/react"
import { GifItem } from "../../src/components/GifItem"

describe('testing on GifItem component', () => {

  const title = "A great title"
  const url = "https://a-great-gif.jpg/"

  test("should match to snapshot", () => {
    const { container } = render(<GifItem title={title} url={url} />)

    expect(container).toMatchSnapshot()
  })

  test("should shows title, image and url given", () => {
    render(<GifItem title={title} url={url} />)

    // screen.debug() // shows current screen rendered

    const { src, alt } = screen.getByRole("img")
    expect(src).toBe(url)
    expect(alt).toBe(alt)
  })

  test('should shows title in component', () => {
    render(<GifItem title={title} url={url} />)
    expect(screen.getByText(title)).toBeTruthy()
  })
})
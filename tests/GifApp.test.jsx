import { render, screen } from "@testing-library/react"
import { GifApp } from "../src/GifApp"

describe('testing on <GifApp />', () => {
  test('should match against snapshot', () => {
    const { container } = render(<GifApp />)
    expect(container).toMatchSnapshot()
  })
})  
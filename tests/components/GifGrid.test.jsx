import { render, screen } from "@testing-library/react"
import { GifGrid } from "../../src/components/GifGrid"
import { useFetchGifs } from "../../src/hooks/useFetchGifs"

jest.mock("../../src/hooks/useFetchGifs")

describe('testing on <GifGrid />', () => {
  const category = 'Goku'

  test("should match against snapshot", () => {

    useFetchGifs.mockReturnValue({
      images: [],
      isLoading: true
    });

    const { container } = render(<GifGrid category={category} />)

    expect(container).toMatchSnapshot()
  })

  test("should shows loading initially", () => {

    useFetchGifs.mockReturnValue({
      images: [],
      isLoading: true
    });

    render(<GifGrid category={category} />);
    expect(screen.getByText(/loading/i));
    expect(screen.getByText(category));
  })

  test('should shows items when gifs are loading from Api', () => {
    const gifs = [
      {
        id: 'ABC',
        title: 'Saitama',
        url: 'https://localhost/saitama.jpg'
      },
      {
        id: '123',
        title: 'Goku',
        url: 'https://localhost/goku.jpg'
      }
    ]

    useFetchGifs.mockReturnValue({
      images: gifs,
      isLoading: false
    });

    render(<GifGrid category={category} />)
    expect(screen.getAllByRole('img').length).toBe(2);

  })
})
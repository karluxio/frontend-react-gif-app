import { render, screen, fireEvent } from "@testing-library/react"
import { AddCategory } from "../../src/components/AddCategory"

describe('testing on <AddCategory />', () => {
  const onNewCategory = jest.fn()

  test('should match against snapshot', () => {
    const { container } = render(<AddCategory onNewCategory={onNewCategory} />)

    expect(container).toMatchSnapshot()
  })

  test('should change input value', () => {
    render(<AddCategory onNewCategory={onNewCategory} />)
    const input = screen.getByRole("textbox")

    fireEvent.input(input, { target: { value: "Goku" } })

    expect(input.value).toBe("Goku")
  })

  test('should call onNewCategory if input has a value', () => {
    const inputValue = "Goku"

    render(<AddCategory onNewCategory={onNewCategory} />)
    const input = screen.getByRole("textbox")
    const form = screen.getByRole("form")

    fireEvent.input(input, { target: { value: inputValue } })
    fireEvent.submit(form)
    expect(input.value).toBe('')
    expect(onNewCategory).toHaveBeenCalled()
    expect(onNewCategory).toHaveBeenCalledTimes(1)
    expect(onNewCategory).toHaveBeenCalledWith(inputValue)
  })

  test('should not call onNewCategory if input is empty', () => {
    const onNewCategory = jest.fn()

    render(<AddCategory onNewCategory={onNewCategory} />)
    const form = screen.getByRole("form")

    fireEvent.submit(form)
    expect(onNewCategory).toHaveBeenCalledTimes(0)
  })


})
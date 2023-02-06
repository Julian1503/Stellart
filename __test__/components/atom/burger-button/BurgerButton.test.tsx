import React from "react";
import { render, fireEvent, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import BurgerButton from "@/components/atoms/burger-button/BurgerButton";

const testId = "btnBurger";
const testClass = "test-class";

afterEach(() => {
  cleanup();
});

describe("Burger button", () => {
  it("should render properly", () => {
    const { getByTestId } = render(<BurgerButton />);
    const burgerButton = getByTestId(testId);
    expect(burgerButton).toBeInTheDocument();
  });

  it("calls the onClick prop when clicked", () => {
    const onClick = jest.fn();
    const { getByTestId } = render(<BurgerButton onClick={onClick} />);
    const button = getByTestId(testId);
    fireEvent.click(button);
    expect(onClick).toHaveBeenCalled();
  });

  it("renders with a custom class name", () => {
    const { getByTestId } = render(<BurgerButton className={testClass} />);
    const button = getByTestId(testId);
    expect(button).toHaveClass(testClass);
  });

  it("matches snapshot", () => {
    const button = render(<BurgerButton />);
    expect(button).toMatchSnapshot();
  });
});

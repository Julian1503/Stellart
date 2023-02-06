import React from "react";
import { render, fireEvent, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import CloseButton from "@/components/atoms/close-button/CloseButton";

const testId = "btnClose";
const testClass = "test-class";

afterEach(() => {
  cleanup();
});

describe("Close button", () => {
  it("should render properly", () => {
    const { getByTestId } = render(<CloseButton />);
    const button = getByTestId(testId);
    expect(button).toBeInTheDocument();
  });

  it("calls the onClick prop when clicked", () => {
    const onClick = jest.fn();
    const { getByTestId } = render(<CloseButton onClick={onClick} />);
    const button = getByTestId(testId);
    fireEvent.click(button);
    expect(onClick).toHaveBeenCalled();
  });

  it("renders with a custom class name", () => {
    const { getByTestId } = render(<CloseButton className={testClass} />);
    const button = getByTestId(testId);
    expect(button).toHaveClass(testClass);
  });

  it("matches snapshot", () => {
    const button = render(<CloseButton />);
    expect(button).toMatchSnapshot();
  });
});

import React from "react";
import { render, fireEvent, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Button from "@/components/atoms/button/Button";

const text = "test-text";
const width = 200;
const height = 100;
const link = "/test-link";
const testClass = "test-class";
const testId = "btn";

afterEach(() => {
  cleanup();
});

describe("Button", () => {
  it("should render properly", () => {
    const { getByTestId } = render(
      <Button width={width} height={height} link={link} text={text} />
    );
    const button = getByTestId(testId);
    expect(button).toBeInTheDocument();
  });

  it("calls the onClick prop when clicked", () => {
    const onClick = jest.fn();
    const { getByTestId } = render(
      <Button
        onClick={onClick}
        width={width}
        height={height}
        link={link}
        text={text}
      />
    );
    const button = getByTestId(testId);
    fireEvent.click(button);
    expect(onClick).toHaveBeenCalled();
  });

  it("renders the correct link in the button", () => {
    const link = "/test-link";
    const { getByTestId } = render(
      <Button width={100} height={40} text="Test button" link={link} />
    );
    const btn = getByTestId("btn");
    expect(btn).toHaveAttribute("href", link);
  });

  it("renders with a custom class name", () => {
    const { getByTestId } = render(
      <Button
        className={testClass}
        width={width}
        height={height}
        link={link}
        text={text}
      />
    );
    const button = getByTestId(testId);
    expect(button).toHaveClass(testClass);
  });

  it("renders with a custom text", () => {
    const { getByTestId } = render(
      <Button
        className={testClass}
        width={width}
        height={height}
        link={link}
        text={text}
      />
    );
    const button = getByTestId(testId);
    expect(button).toHaveTextContent(text);
  });

  it("applies the width prop", () => {
    const { getByTestId } = render(
      <Button
        className={testClass}
        width={width}
        height={height}
        link={link}
        text={text}
      />
    );
    const btn = getByTestId(testId);
    expect(btn).toHaveStyle(`width: ${width}px`);
  });

  it("applies the width prop", () => {
    const { getByTestId } = render(
      <Button
        className={testClass}
        width={width}
        height={height}
        link={link}
        text={text}
      />
    );
    const btn = getByTestId(testId);
    expect(btn).toHaveStyle(`height: ${height}px`);
  });

  it("matches snapshot", () => {
    const button = render(
      <Button
        className={testClass}
        width={width}
        height={height}
        link={link}
        text={text}
      />
    );
    expect(button).toMatchSnapshot();
  });

  it("applies the hasShadow prop", () => {
    const { getByTestId } = render(
      <Button
        hasShadow
        className={testClass}
        width={width}
        height={height}
        link={link}
        text={text}
      />
    );
    const button = getByTestId(testId);
    expect(button).toHaveClass("btn shadow test-class");
  });
});

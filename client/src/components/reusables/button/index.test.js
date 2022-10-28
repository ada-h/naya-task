import { render } from "@testing-library/react";
import { Button } from "./index";

describe("Button Component", () => {
  it("rendered button", () => {
    const { getByTestId } = render(<Button type={"Submit"} />);
    const input = getByTestId("primary");
    expect(input).toBeTruthy();
  });
});

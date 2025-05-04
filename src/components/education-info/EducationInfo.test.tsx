import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { EducationInfo } from "./EducationInfo";

describe("EducationInfo", () => {
  it("renders all expected headings", () => {
    render(<EducationInfo />);

    expect(screen.getByRole("heading", { name: /education/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /programming/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /abovyan state energy college/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /2013/i })).toBeInTheDocument();
  });
});

import { render, screen } from "@testing-library/react";
import { ContactsList } from "./ContactsList";

import { contacts } from "./ContactsList";

describe("ContactsList", () => {
  beforeEach(() => {
    render(<ContactsList />);
  });

  it("renders the section title", () => {
    expect(screen.getByText(/Contacts/i)).toBeInTheDocument();
  });

  it("renders email with correct mailto link", () => {
    const emailLink = screen.getByText(contacts.email);
    expect(emailLink).toBeInTheDocument();
    expect(emailLink).toHaveAttribute("href", `mailto:${contacts.email}`);
  });

  it("renders phone number with correct tel link", () => {
    const phoneLink = screen.getByText(contacts.phone);
    expect(phoneLink).toBeInTheDocument();
    expect(phoneLink).toHaveAttribute("href", `tel:${contacts.phone}`);
  });

  it("renders address with correct Google Maps link", () => {
    const addressLink = screen.getByText(contacts.address);
    expect(addressLink).toBeInTheDocument();
    expect(addressLink).toHaveAttribute("href", contacts.googleMapAddress);
  });
});

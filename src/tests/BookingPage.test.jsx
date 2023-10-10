import { describe, expect, it, vi } from "vitest";
import BookingPage from "../components/pages/BookingPage";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";

describe("Check the form component it should render with updated times", () => {
  it("should render the bboking page component ", () => {
    render(
      <BrowserRouter>
        <BookingPage />
      </BrowserRouter>
    );
    // screen.debug()
  });

  it("should show helper text when user does not fill the form and submits the form", async () => {
    render(
      <BrowserRouter>
        <BookingPage />
      </BrowserRouter>
    );

    const dateInput = screen.getByLabelText(/Choose date/);
    const timeInput = screen.getByLabelText(/Select time/);
    const guestsInput = screen.getByLabelText(/Number of guests/);
    const occasionInput = screen.getByLabelText(/Occasion/);
    const submitButton = screen.getByRole("button", {
      name: /Make Your reservation/i,
    });
    userEvent.click(submitButton);
    dateInput.focus();
    timeInput.focus();
    guestsInput.focus();
    occasionInput.focus(); 
    dateInput.focus(); 
    expect(await screen.findByText("Date is required")).toBeInTheDocument();
    expect(await screen.findByText("Time is required")).toBeInTheDocument();
    expect(
      await screen.findByText("Minimum number of guests is 1")
    ).toBeInTheDocument();
    expect(await screen.findByText("Occasion is required")).toBeInTheDocument();
  });

  it("should render initial times when user fills the date", async () => {
    render(
      <BrowserRouter>
        <BookingPage />
      </BrowserRouter>
    );
    const dateInput = screen.getByLabelText(/Choose date/);
    userEvent.type(dateInput, "2023-09-30");
    /// wait for the availible times to be updated
    await new Promise((resolve) => setTimeout(resolve, 1000));
    expect(screen.getByText(/17:00/i)).toBeInTheDocument();
    expect(screen.getByText(/18:00/i)).toBeInTheDocument();
    expect(screen.getByText(/19:00/i)).toBeInTheDocument();
    expect(screen.getByText(/20:00/i)).toBeInTheDocument();
    expect(screen.getByText(/21:00/i)).toBeInTheDocument();
    expect(screen.getByText(/22:00/i)).toBeInTheDocument();
  });

  it("should render updated times when user fills the date ", async () => {
    render(
      <BrowserRouter>
        <BookingPage />
      </BrowserRouter>
    );
    const dateInput = screen.getByLabelText(/Choose date/);
    /// in the date 09/25/2023 there is one table reserved at Time 19:00 initialy
    userEvent.type(dateInput, "2023-09-25");
    /// wait for the availible times to be updated
    await new Promise((resolve) => setTimeout(resolve, 500));
    expect(screen.getByText(/17:00/i)).toBeInTheDocument();
    expect(screen.getByText(/18:00/i)).toBeInTheDocument();
    expect(screen.queryByText(/19:00/i)).not.toBeInTheDocument();
    expect(screen.getByText(/20:00/i)).toBeInTheDocument();
    expect(screen.getByText(/21:00/i)).toBeInTheDocument();
    expect(screen.getByText(/22:00/i)).toBeInTheDocument();
  });

  it("should submit data correctly when user fills the form and submits the form", async () => {
    const formSubmitHandler = vi.fn();
    render(
      <BrowserRouter>
        <BookingPage />
      </BrowserRouter>
    );
    const dateInput = screen.getByLabelText(/Choose date/);
    const timeInput = screen.getByLabelText(/Select time/);
    const guestsInput = screen.getByLabelText(/Number of guests/);
    const occasionInput = screen.getByLabelText(/Occasion/);
    const submitButton = screen.getByRole("button", {
      name: /Make Your reservation/i,
    });
    userEvent.type(dateInput, `09/25/2023`);
    userEvent.type(timeInput, "20:00");
    userEvent.type(guestsInput, "2");
    userEvent.type(occasionInput, "Anniversary");
    userEvent.click(submitButton);
    waitFor(() => {
      expect(formSubmitHandler).toHaveBeenCalledWith({
        Date: "09/25/2023",
        Time: "20:00",
        Guests: 2,
        Occasion: "Anniversary",
      });
    });

    userEvent.type(dateInput, "09/25/2023");
  });
});

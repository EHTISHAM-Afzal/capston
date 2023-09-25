import Tester from "./tester";
import {
  render,
  screen,
  waitFor,
} from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import userEvent from "@testing-library/user-event";
import FetchData from "./FetchData";
import axios from "axios";

describe.skip("App", () => {
  it("renders App component", () => {
    render(<Tester />);
  });

  it("Search for Seach: in document", async () => {
    render(<Tester />);
    expect(screen.getByText(/Search:/)).toBeInTheDocument();
    // expect(screen.getByText(/Search:/)).toBeInTheDocument();
    // expect(screen.getByRole('textbox')).toBeInTheDocument()
    // expect(screen.queryByText(/this is  javaScript/)).toBeNull()
    expect(screen.queryByText(/Signed in as/)).toBeNull();
    expect(await screen.findByText(/Signed in as/)).toBeInTheDocument();
  });

  it("should Change the value of the input", () => {
    render(<Tester />);
    expect(screen.queryByText(/Searches for JavaScript/)).toBeNull();
    userEvent.type(screen.getByRole("textbox"), "JavaScript");
    waitFor(() => {
      expect(screen.getByText(/Searches for JavaScript/)).toBeInTheDocument();
    });
  });
});

vi.mock("axios");

describe("look for the list items in fetched data ", () => {
  it("it shoult render the list items in the fetched data", async () => {
    const stories = [
      { ObjectID: 1, title: "First Story" },
      { ObjectID: 2, title: "Second Story" },
    ];

    const promise = Promise.resolve({ data: { hits: stories } });

    axios.get.mockImplementationOnce(() => promise);

    render(<FetchData />);

    await waitFor(() => userEvent.click(screen.getByRole("button")));

    waitFor(() => promise);

    expect(screen.getAllByRole("listitem")).toHaveLength(2);
  });

  it("it should throw an error if the api call fails", async () => {
    axios.get.mockImplementationOnce(() => Promise.reject(new Error()));

    render(<FetchData />);

    waitFor(() => userEvent.click(screen.getByRole("button")));

    const Error = await screen.findByText(/Something went wrong/);

    expect(Error).toBeInTheDocument();
  });
});

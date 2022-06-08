import { render, screen } from "@testing-library/react";
import React from "react";
import user from "@testing-library/user-event";
import { act } from "react-dom/test-utils";
import App from "./App";

describe("MultiPartForm tests", () => {
    render(<App />);

    it("all fields pass validation", async () => {
        expect(
            screen.getByRole("heading", {
                name: /github user search/i,
            }).textContent
        ).toBe("Github User Search");

        user.click(screen.getByRole("button", { name: /next/i }));
        expect(
            screen.getByRole("button", { name: /next/i })
        ).toBeInTheDocument();

        expect(
            screen.getByRole("textbox", {
                name: /First Name/i,
            })
        ).toBeInTheDocument();

        const firstName = screen.getByRole("textbox", {
            name: /first name/i,
        });
        user.type(firstName, "Thomas");

        const lastName = screen.getByRole("textbox", {
            name: /last name/i,
        });
        user.type(lastName, "Wilson");

        const userName = screen.getByRole("textbox", {
            name: /Github Username/i,
        });

        user.type(userName, "rocinante32");

        user.click(screen.getByRole("button", { name: /next/i }));

        const email = screen.getByRole("textbox", {
            name: /email/i,
        });

        user.type(email, "wilf06@hotmail.co.uk");

        const checkbox = screen.getByRole("checkbox", {
            name: /terms/i,
        });

        user.click(checkbox);

        user.click(
            screen.getByRole("button", {
                name: /submit/i,
            })
        );

        expect(screen.getByText(/rocinante32/i)).toBeInTheDocument();
        await act(() => {
            Promise.resolve();
        });
    });

    it("check button is disabled when no information has been entered", async () => {
        render(<App />);
        user.click(screen.getByRole("button", { name: /next/i }));

        //expect next button to be disabled as 3 fields aren't filled
        expect(screen.getByRole("button", { name: /next/i })).toBeDisabled();

        await act(() => {
            Promise.resolve();
        });
    });
});

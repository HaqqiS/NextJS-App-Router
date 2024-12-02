import AboutPage from "@/app/about/page";
import AboutLayout from "@/app/about/layout";
import { render, screen } from "@testing-library/react";
import { describe } from "node:test";

describe("AboutPage", () => {
    it("should render the about page", () => {
        const page = render(
            <AboutLayout>
                <AboutPage />
            </AboutLayout>
        );

        expect(page).toMatchSnapshot();
    });
});

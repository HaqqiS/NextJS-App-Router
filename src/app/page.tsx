import { Metadata } from "next";

export const metadata: Metadata = {
    metadataBase: new URL(process.env.NEXT_PUBBLIC_API_URL || "http://localhost:3000"),
    title: "Home",
    description: "Home page for Next App Router",
    authors: [{ name: "Haqqi Sukmara Ishfahani", url: "http://localhost:3000" }],
};
export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <p>hello W orld</p>
        </main>
    );
}

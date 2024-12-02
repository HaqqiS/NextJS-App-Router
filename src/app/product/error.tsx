"use client";
import { useEffect } from "react";

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
    useEffect(() => console.log(error), [error]);
    return (
        <div className="m-5">
            <h1>Something went wrong</h1>
            <button
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                onClick={() => reset()}
            >
                Reset
            </button>
        </div>
    );
}

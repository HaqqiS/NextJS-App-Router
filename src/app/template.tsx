"use client";
import { useState } from "react";

export default function Template({ children }: { children: React.ReactNode }) {
    const [test, setTest] = useState(0);

    return (
        <div>
            {/* <h1>Template {test}</h1> */}
            {/* <button onClick={() => setTest(test + 1)}>Increment</button> */}
            {children}
        </div>
    );
}

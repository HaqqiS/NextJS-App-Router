"use client";

import { useState } from "react";

export default function AdminProductPage() {
    const [status, setStatus] = useState("");
    const revalidate = async () => {
        const res = await fetch(
            `${process.env.NEXT_PUBLIC_API_URL}/api/revalidate?tag=products&secret=hqi1234`,
            {
                method: "POST",
            }
        );

        if (!res.ok) {
            setStatus("Revalidate Failed");
        } else {
            const response = await res.json();
            if (response.revalidate) {
                setStatus("Revalidate Success");
            }
        }
    };

    return (
        <div className="w-full h-96 bg-slate-300 rounded-[12px] flex items-center justify-center">
            <h1>{status}</h1>

            <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={() => revalidate()}
            >
                Revalidate
            </button>
        </div>
    );
}

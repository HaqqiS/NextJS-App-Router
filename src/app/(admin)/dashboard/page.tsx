"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function DashboardPage() {
    // const { data: session, status }: { data: any; status: any } = useSession();
    // const router = useRouter();

    // useEffect(() => {
    //     if (status === "unauthenticated") {
    //         router.push("/login");
    //     } else {
    //         if (session !== undefined && session?.user.role !== "admin") {
    //             router.push("/");
    //         }
    //     }
    // }, [status, router, session, session?.user.role]);

    return (
        <div className="w=full h-96 bg-slate-300 rounded-[12px] flex items-center justify-center">
            <h1>DashboardPage</h1>
        </div>
    );
}

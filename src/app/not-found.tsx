import Link from "next/link";

export default function NotFound() {
    return (
        <div className="w-full min-h-screen   rounded-[12px] flex flex-col items-center justify-center gap-3">
            <h1 className="text-8xl">404</h1>
            <p className="text-xl">Page Not Found</p>
            <Link href="/" className="text-blue-500 bg-slate-300 border border-blue-300 p-4 rounded-lg">
                Go Home
            </Link>
        </div>
    );
}

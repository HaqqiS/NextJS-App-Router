export default function AboutLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <nav className="bg-slate-600 fixed right-0 top-14 w-60 h-screen z-10 text-white">
                <ul className="flex flex-col gap-3 px-5 pt-4">
                    <li>Home</li>
                    <li>About</li>
                    <li>Profile</li>
                </ul>
            </nav>
            <div>{children}</div>
        </>
    );
}

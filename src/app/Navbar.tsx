import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const Navbar = () => {
    const pathname = usePathname();
    const router = useRouter();
    const { data: session, status }: { data: any; status: any } = useSession();

    return (
        <nav className="flex bg-slate-600 mx-auto py-3 px-8 justify-between items-center">
            <h1 className="text-white text-2xl">Navbar</h1>

            <div>
                <ul className="flex gap-3">
                    <Link href={"/"}>
                        <li
                            className={`${pathname === "/" ? "text-blue-300" : "text-white"}  cursor-pointer`}
                        >
                            Home
                        </li>
                    </Link>
                    <Link href={"/about"}>
                        <li
                            className={`${
                                pathname === "/about" ? "text-blue-300" : "text-white"
                            }  cursor-pointer`}
                        >
                            About
                        </li>
                    </Link>
                    <Link href={"/about/profile"}>
                        <li
                            className={`${
                                pathname === "/about/profile" ? "text-blue-300" : "text-white"
                            }  cursor-pointer`}
                        >
                            Profile
                        </li>
                    </Link>
                </ul>
            </div>

            <div className="flex flex-row gap-3 items-center">
                {status === "authenticated" ? (
                    <>
                        <Image
                            src="/images/user.png"
                            alt="profile"
                            className="rounded-full w-10 h-10 border-[2px] border-black bg-slate-500"
                            width={40}
                            height={40}
                        />
                        <p className="text-white">{session?.user?.fullname}</p>
                        <button className="bg-white rounded px-3 py-1.5" onClick={() => signOut()}>
                            Logout
                        </button>
                    </>
                ) : (
                    <button className="bg-white rounded px-3 py-1.5" onClick={() => signIn()}>
                        Login
                    </button>
                )}
            </div>
        </nav>
    );
};
export default Navbar;

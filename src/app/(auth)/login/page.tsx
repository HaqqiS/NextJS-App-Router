"use client";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginPage({ searchParams }: any) {
    const { push } = useRouter();
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const callbackUrl = searchParams.callbackUrl || "/";

    const handleLogin = async (e: any) => {
        e.preventDefault();
        setError("");
        setIsLoading(true);

        try {
            const res = await signIn("credentials", {
                redirect: false,
                email: e.target.email.value,
                password: e.target.password.value,
                callbackUrl,
            });
            if (!res?.error) {
                e.target.reset();
                setIsLoading(false);
                push(callbackUrl);
            } else {
                setIsLoading(false);
                if (res.status === 401) setError("Invalid email or password");
            }
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <section className="bg-slate-50  ">
            <div className="w-full lg:w-4/12 px-4 mx-auto pt-6 h-screen ">
                <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg  border-0 mt-20">
                    <div className="rounded-t mb-0 px-6 py-6 bg-slate-100">
                        <div className="text-center mb-3">
                            <h6 className="text-slate-500 text-sm font-bold">Sign in with</h6>
                        </div>
                        <div className="btn-wrapper text-center">
                            <button
                                className="bg-white active:bg-slate-50 text-slate-700 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-2 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150"
                                type="button"
                            >
                                <img
                                    alt="..."
                                    className="w-5 mr-1"
                                    src="https://demos.creative-tim.com/notus-js/assets/img/github.svg"
                                />
                                Github
                            </button>
                            <button
                                className="bg-white active:bg-slate-50 text-slate-700 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150"
                                type="button"
                                onClick={() => signIn("google", { callbackUrl, redirect: false })}
                            >
                                <img
                                    alt="..."
                                    className="w-5 mr-1"
                                    src="https://demos.creative-tim.com/notus-js/assets/img/google.svg"
                                />
                                Google{" "}
                            </button>
                        </div>
                        <hr className="mt-6 border-b-1 border-slate-300" />
                    </div>
                    <div className="flex-auto px-4 lg:px-10 py-10 pt-0 bg-slate-100">
                        <div className="text-slate-400 text-center mb-3 font-bold">
                            <small>Or sign in with credentials</small>
                            {error !== "" && <p className="text-red-500">{error}</p>}
                        </div>
                        <form onSubmit={(e) => handleLogin(e)}>
                            <div className="relative w-full mb-3">
                                <label
                                    className="block uppercase text-slate-600 text-xs font-bold mb-2"
                                    htmlFor="email"
                                >
                                    Email
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    className="border-0 px-3 py-3 placeholder-slate-300 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                    placeholder="Email"
                                />
                            </div>
                            <div className="relative w-full mb-3">
                                <label
                                    className="block uppercase text-slate-600 text-xs font-bold mb-2"
                                    htmlFor="password"
                                >
                                    Password
                                </label>
                                <input
                                    type="password"
                                    name="password"
                                    id="password"
                                    className="border-0 px-3 py-3 placeholder-slate-300 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                    placeholder="Password"
                                />
                            </div>
                            <div className="text-center mt-6">
                                <button
                                    disabled={isLoading}
                                    className="bg-slate-800 text-white active:bg-slate-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                                    type="submit"
                                >
                                    {isLoading ? "Loading..." : "Sign In"}
                                </button>
                            </div>
                        </form>

                        <div className="text-slate-400 text-center mb-3 font-bold">
                            <small>
                                Don&apos;t have an account?
                                <Link
                                    href="/register"
                                    className="text-base text-blue-400 hover:text-blue-600 hover:underline cursor-pointer"
                                >
                                    {" "}
                                    Create Account
                                </Link>
                            </small>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export default function Register() {
    const [user, setUser] = useState({
        email: "",
        password: "",
        first_name: "",
        last_name: "",
    });

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await axios.post("http://localhost:5000/api/auth/register",
                { "email": user.email, "password": user.password, "first_name": user.first_name, "last_name": user.last_name }, {
                headers: {
                    "Content-Type": "application/json",
                },
            });

            window.location.href = "/login";

        }
        catch (error) {
            console.error(error);
        }
    }


    return (
        <>
            <section>
                <div className="flex flex-col items-center justify-center px-6 lg:py-20 mx-auto py-16">
                    <div className="w-full bg-white rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
                                Sign up for your account
                            </h1>
                            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                                <div>
                                    <label
                                        htmlFor="email"
                                        className="block mb-2 text-sm font-medium text-gray-900"
                                    >
                                        Your email
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  "
                                        placeholder="name@gmail.com"
                                        required=""
                                        value={user.email}
                                        onChange={(e) => setUser({ ...user, email: e.target.value })}
                                        autoComplete="email"
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor="first_name"
                                        className="block mb-2 text-sm font-medium text-gray-900"
                                    >
                                        First Name
                                    </label>
                                    <input
                                        type="text"
                                        name="first_name"
                                        id="first_name"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  "
                                        placeholder="John"
                                        required="required"
                                        value={user.first_name}
                                        onChange={(e) => setUser({ ...user, first_name: e.target.value })}
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor="last_name"
                                        className="block mb-2 text-sm font-medium text-gray-900"
                                    >
                                        Last Name
                                    </label>
                                    <input
                                        type="text"
                                        name="last_name"
                                        id="last_name"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  "
                                        placeholder="John"
                                        required="required"
                                        value={user.last_name}
                                        onChange={(e) => setUser({ ...user, last_name: e.target.value })}
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor="password"
                                        className="block mb-2 text-sm font-medium text-gray-900"
                                    >
                                        Password
                                    </label>
                                    <input
                                        type="password"
                                        name="password"
                                        id="password"
                                        placeholder="••••••••"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5   "
                                        required="required"
                                        autoComplete="current-password"
                                        value={user.password}
                                        onChange={(e) => setUser({ ...user, password: e.target.value })}
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="w-full text-black bg-teal-500 hover:bg-teal-600 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
                                >
                                    Sign up
                                </button>
                                <p className="text-sm font-light text-gray-500">
                                    Already have an account?{" "}
                                    <Link
                                        to={"/register"}
                                        className="font-medium text-primary-600 hover:underline"
                                    >
                                        Sign in
                                    </Link>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

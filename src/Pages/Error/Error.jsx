import React from "react";
import { Link } from "react-router";

const Error = () => {
    return (
        <div className="min-h-screen flex flex-col justify-center items-center bg-gray-50 text-center px-4">
            <h1 className="text-[120px] font-extrabold text-[#FF9600] leading-none">404</h1>

            <h2 className="text-2xl font-semibold text-gray-800 mt-4">Oops! Page Not Found</h2>
            <p className="text-gray-600 mt-2 max-w-md">The page you’re looking for doesn’t exist or has been moved. Let’s get you back on track.</p>

            <Link to="/" className="mt-6 inline-block px-6 py-3 bg-[#FF9600] text-white rounded-lg shadow-md hover:bg-[#e58600] transition-all">Go Back Home</Link>
        </div>
    );
};

export default Error;

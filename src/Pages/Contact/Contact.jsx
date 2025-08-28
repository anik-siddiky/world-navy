import React, { useState } from "react";
import { useNavigate } from "react-router";
import emailjs from "emailjs-com";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [submitted, setSubmitted] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.send(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
            {
                name: formData.name,
                email: formData.email,
                message: formData.message,
                reply_to: formData.email,
            },
            import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        )
            .then(
                () => {
                    setFormData({ name: "", email: "", message: "" });
                    setSubmitted(true);
                },
                (error) => {
                    console.error("EmailJS Error:", error);
                    alert("Something went wrong. Please try again.");
                }
            );
    };

    if (submitted) {
        return (
            <div className="min-h-[calc(100vh-143px)] flex items-center justify-center bg-gradient-to-br from-orange-50 to-orange-100 p-6">
                <div className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-lg text-center">
                    <h2 className="text-3xl font-bold text-[#FF9600] mb-4">
                        Thank You!
                    </h2>
                    <p className="text-gray-600 mb-6">
                        Your message has been successfully sent.
                    </p>
                    <button
                        onClick={() => navigate("/")}
                        className="bg-[#FF9600] text-white py-2 px-6 rounded-xl hover:bg-[#e67f00] transition duration-300 shadow-md cursor-pointer"
                    >
                        Go to Home
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-[calc(100vh-143px)] flex items-center justify-center bg-gradient-to-br from-orange-50 to-orange-100 p-6">
            <div className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-lg">
                <h2 className="text-3xl font-bold text-center text-[#FF9600] mb-6">
                    Contact Us
                </h2>
                <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Name
                        </label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Enter your name"
                            required
                            className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FF9600]"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Email
                        </label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Enter your email"
                            required
                            className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FF9600]"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Message
                        </label>
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Write your message..."
                            rows="4"
                            required
                            className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FF9600]"
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-[#FF9600] text-white py-2 rounded-xl hover:bg-[#e67f00] transition duration-300 shadow-md cursor-pointer"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Contact;

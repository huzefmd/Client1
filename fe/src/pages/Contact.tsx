import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface FormData {
    name: string;
    email: string;
    phone: string;
    message: string;
}

const Contact: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({
        name: "",
        email: "",
        phone:"",
        message: "",
    });

    const [isSending, setIsSending] = useState(false);
    const [status, setStatus] = useState<{ type: "success" | "error" | null; message: string }>({
        type: null,
        message: "",
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSending(true);
        setStatus({ type: null, message: "" });

        const SERVICE_ID = "service_w16pxlt";
        const TEMPLATE_ID = "template_nej2sih";
        const PUBLIC_KEY = "1m9E5lm2Sjfv1Cwzd";

        emailjs
            .send(SERVICE_ID, TEMPLATE_ID, formData, PUBLIC_KEY)
            .then(() => {
                setStatus({ type: "success", message: "✅ Message sent successfully!" });
                setFormData({ name: "", email: "",phone :"", message: "" });
            })
            .catch((error) => {
                console.error("EmailJS Error:", error);
                setStatus({
                    type: "error",
                    message: "❌ Failed to send message. Please try again.",
                });
            })
            .finally(() => setIsSending(false));
    };

    return (
        
        <div className="min-h-screen flex  flex-col    items-center justify-center bg-neutral-900 p-6">
            <Navbar />
            <form
                onSubmit={handleSubmit}
                className="w-full max-w-lg bg-white rounded-2xl shadow-lg p-8 space-y-5 border border-gray-100 mt-32"
            >
                <h2 className="text-3xl font-semibold text-center text-black mb-6">
                    Contact Us
                </h2>

                <div>
                    <label className="block text-sm font-medium text-gray-600 mb-1">
                        Name
                    </label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none text-black"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-600 mb-1">
                        Email
                    </label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none text-black"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-600 mb-1">
                        Phone
                    </label>
                    <input
                        type="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none text-black"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-600 mb-1">
                        Message
                    </label>
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={4}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none resize-none text-black"
                    />
                </div>

                <button
                    type="submit"
                    disabled={isSending}
                    className={`w-full py-2 rounded-lg text-white font-semibold transition-all duration-300 ${isSending
                            ? "bg-blue-400 cursor-not-allowed"
                            : "bg-black hover:bg-neutral-700"
                        }`}
                >
                    {isSending ? "Sending..." : "Send Message"}
                </button>

                {status.message && (
                    <p
                        className={`text-center mt-4 font-medium ${status.type === "success" ? "text-green-600" : "text-red-600"
                            }`}
                    >
                        {status.message}
                    </p>
                )}
            </form>
            <Footer/>
        </div>
    );
};

export default Contact;

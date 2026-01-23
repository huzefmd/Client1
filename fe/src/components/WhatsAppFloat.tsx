import { MessageCircle } from "lucide-react";

const WhatsAppFloat = () => {
    const phoneNumber = "91+97411 23546"; // 👈 country code + number (no +, no spaces)
    const message = "Hello! I want to know more about your services.";

    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
        message
    )}`;

    return (
        <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-green-500 shadow-lg hover:bg-green-600 transition-all animate-bounce"
            aria-label="Chat on WhatsApp"
        >
            <MessageCircle className="text-white w-7 h-7" />
        </a>
    );
};

export default WhatsAppFloat;

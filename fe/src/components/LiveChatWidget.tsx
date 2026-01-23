import { useState } from "react";
import { X, Send } from "lucide-react";

type Step = "name" | "email" | "question" | "done";

const LiveChatWidget = () => {
    const [open, setOpen] = useState(false);
    const [step, setStep] = useState<Step>("name");
    const [messages, setMessages] = useState([
        { from: "bot", text: "Hi 👋 Welcome! What’s your name?" }
    ]);

    const [form, setForm] = useState({
        name: "",
        email: "",
        question: ""
    });

    const [input, setInput] = useState("");

    const handleSend = () => {
        if (!input.trim()) return;

        setMessages((prev) => [...prev, { from: "user", text: input }]);

        if (step === "name") {
            setForm({ ...form, name: input });
            setStep("email");
            botReply("Nice to meet you 😊 What’s your email?");
        }

        if (step === "email") {
            setForm({ ...form, email: input });
            setStep("question");
            botReply("Great! Please tell us your question.");
        }

        if (step === "question") {
            setForm({ ...form, question: input });
            setStep("done");
            botReply(
                "✅ Thank you! Our expert will contact you shortly.\n📞 You can also call us at 91+97411 23546"
            );

            // 🔥 HERE you can send data to backend
            console.log("User Data:", {
                ...form,
                question: input
            });
        }

        setInput("");
    };

    const botReply = (text: string) => {
        setTimeout(() => {
            setMessages((prev) => [...prev, { from: "bot", text }]);
        }, 600);
    };

    return (
        <>
            {/* Floating Button */}
            {!open && (
                <div
                    onClick={() => setOpen(true)}
                    className="fixed bottom-6 right-6 z-50 cursor-pointer flex items-center gap-2 bg-black rounded-full shadow-lg p-2"
                >
                    <img
                        src="/chat.jpeg"
                        className="w-12 h-12 rounded-full"
                    />

                </div>
            )}

            {/* Chat Box */}
            {open && (
                <div className="fixed bottom-6 right-6 w-80 bg-black rounded-xl shadow-2xl z-50 flex flex-col">
                    <div className="flex justify-between items-center bg-white text-black p-3 rounded-t-xl">
                        <span>Live Chat</span>
                        <X onClick={() => setOpen(false)} className="cursor-pointer" />
                    </div>

                    <div className="flex-1 p-3 space-y-2 overflow-y-auto text-sm">
                        {messages.map((msg, i) => (
                            <div
                                key={i}
                                className={`p-2 rounded-lg max-w-[75%] ${msg.from === "bot"
                                        ? "bg-black"
                                        : "bg-white text-white ml-auto"
                                    }`}
                            >
                                {msg.text}
                            </div>
                        ))}
                    </div>

                    {step !== "done" && (
                        <div className="flex border-t p-2 gap-2">
                            <input
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                placeholder={
                                    step === "name"
                                        ? "Enter your name"
                                        : step === "email"
                                            ? "Enter your email"
                                            : "Type your question"
                                }
                                className="flex-1 px-2 text-sm outline-none rounded placeholder-black text-black"
                            />
                            <Send
                                onClick={handleSend}
                                className="text-white cursor-pointer"
                            />
                        </div>
                    )}
                </div>
            )}
        </>
    );
};

export default LiveChatWidget;

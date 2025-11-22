"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!name || !email || !message) {
      setError("All fields are required!");
      return;
    }

    // Basic email validation
    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(email)) {
      setError("Enter a valid email address!");
      return;
    }

    setLoading(true); // Start loading

    // Simulate 2 second delay
    setTimeout(async () => {
      try {
        const res = await fetch("/api/sendEmail", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name, email, message }),
        });

        if (res.ok) {
          setSuccess("Message sent successfully!");
          setName("");
          setEmail("");
          setMessage("");
        } else {
          setError("Failed to send message. Try again!");
        }
      } catch (err) {
        setError("Something went wrong!");
      } finally {
        setLoading(false); // Stop loading
      }
    }, 1000); // ⏱ 2 seconds
  };

  return (
    <main className="bg-black text-white min-h-screen">
      <Navbar />

      <section className="max-w-6xl mx-auto py-32 px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-semibold mb-4 capitalize">Contact Me</h2>
          <p className="text-gray-300 text-base sm:text-lg md:text-xl leading-relaxed capitalize">
            Feel free to reach out for collaborations or project inquiries.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* LEFT SIDE */}
          <div className="flex flex-col items-center md:items-start gap-6 bg-white/10 px-6 py-10 lg:p-12 rounded-2xl backdrop-blur text-center">
            <img
              src="/my-image.png"
              alt="Munna"
              className="w-40 h-40 rounded-full object-cover"
            />
            <div className="mt-4 text-left w-full">
              <h3 className="text-2xl font-semibold capitalize">Munna</h3>
              <p className="text-gray-300 mt-2">
                Front-End Web Developer & Wordpress Specialist
              </p>

              <div className="mt-6 flex flex-col gap-2.5 text-gray-300">
                <p>
                  <span className="font-semibold text-green-400">Phone:</span>{" "}
                  <a href="tel:+8801314902856" className="hover:underline">
                    +880 01314902856
                  </a>
                </p>
                <p>
                  <span className="font-semibold text-green-400">Email:</span>{" "}
                  <a
                    href="mailto:habiburrahmanmunna56@gmail.com"
                    className="hover:underline"
                  >
                    habiburrahmanmunna56@gmail.com
                  </a>
                </p>

                <p>
                  <span className="font-semibold text-green-400">
                    Location:
                  </span>{" "}
                  Sylhet, Bangladesh
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE FORM */}
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-6 bg-white/10 px-4 py-10 lg:p-12 rounded-2xl backdrop-blur"
          >
            <div className="flex flex-col text-left">
              <label className="text-sm text-gray-300 mb-2">Your Name</label>
              <input
                type="text"
                value={name}
                placeholder="Enter your name"
                onChange={(e) => setName(e.target.value)}
                className="p-4 rounded-lg bg-black/40 border border-gray-700 text-white focus:border-green-400 focus:outline-none"
              />
            </div>

            <div className="flex flex-col text-left">
              <label className="text-sm text-gray-300 mb-2">
                Email Address
              </label>
              <input
                type="email"
                value={email}
                placeholder="Enter your email"
                onChange={(e) => setEmail(e.target.value)}
                className="p-4 rounded-lg bg-black/40 border border-gray-700 text-white focus:border-green-400 focus:outline-none"
              />
            </div>

            <div className="flex flex-col text-left">
              <label className="text-sm text-gray-300 mb-2">Message</label>
              <textarea
                rows="5"
                value={message}
                placeholder="Write your message here..."
                onChange={(e) => setMessage(e.target.value)}
                className="p-4 rounded-lg bg-black/40 border border-gray-700 text-white focus:border-green-400 focus:outline-none"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={loading}
              className={`w-full py-4 bg-green-400 text-black font-semibold rounded-lg hover:bg-green-500 transition capitalize text-center ${
                loading ? "opacity-70 cursor-not-allowed" : ""
              }`}
            >
              {loading ? "Sending..." : "Send Email Directly"}
            </button>
            {error && <p className="text-red-400">{error}</p>}
            {success && <p className="text-green-400">{success}</p>}
          </form>
        </div>
      </section>

      <Footer />
    </main>
  );
}

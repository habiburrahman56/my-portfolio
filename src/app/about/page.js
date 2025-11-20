import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function About() {
  return (
    <main className="bg-black text-white min-h-screen overflow-x-hidden">
      <Navbar />

      <section className="max-w-4xl mx-auto py-32 px-6 flex flex-col justify-center items-center text-center">
        {/* My Image */}
        <img
          src="/my-image.png"
          alt="My Avatar"
          className="w-32 sm:w-40 md:w-48 lg:w-56 h-32 sm:h-40 md:h-48 lg:h-56 rounded-full object-cover mb-8 border-2 border-gray-600 shadow-lg"
        />

        <h2 className="text-3xl sm:text-4xl font-semibold mb-6">About Me</h2>

        <p className="text-gray-300 text-base sm:text-lg md:text-xl leading-relaxed capitalize">
          I am a passionate Front-End Developer specializing in creating modern,
          responsive, and user-friendly web applications. My expertise includes
          HTML, CSS, Tailwind CSS, JavaScript, React, Next.js, TypeScript, and
          WordPress. I focus on writing clean, efficient code while delivering
          engaging digital experiences that meet both business and user needs.
        </p>

        <Link href="/contact">
          <button className="mt-8 inline-block px-8 py-4 bg-green-400 text-black rounded-lg font-semibold capitalize">
            contact me
          </button>
        </Link>
      </section>

      <Footer />
    </main>
  );
}

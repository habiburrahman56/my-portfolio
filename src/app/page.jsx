"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen flex flex-col justify-center items-center ">
      <Navbar />

      {/* HERO */}
      <section className=" container max-w-6xl mx-auto py-20 flex flex-col lg:flex-row justify-between items-center min-h-screen px-6 lg:px-20 gap-12">
        {/* LEFT CONTENT */}
        <div className="flex-1 text-center lg:text-left">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl lg:text-6xl font-bold"
          >
            Hi, I'm <span className="text-green-400">Munna</span>
          </motion.h1>

          <p className="text-lg text-gray-300 mt-4 max-w-xl">
            Front-End Developer skilled in HTML, CSS, JavaScript, React,
            Tailwind, Next.js, Typescript, & Wordpress.
          </p>

          <Link
            href="/projects"
            className="mt-8 inline-block px-8 py-4 bg-green-400 text-black hover:bg-green-500 transition rounded-lg font-semibold"
          >
            View My Work
          </Link>
        </div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1 }}
          className="flex-1 flex justify-center"
        >
          <img
            src="/my-image.png"
            alt="My Image"
            className="w-72 sm:w-80 md:w-[650px] lg:w-[420px] rounded-full shadow-xl object-cover mx-auto"
          />
        </motion.div>
      </section>

      <Footer />
    </main>
  );
}

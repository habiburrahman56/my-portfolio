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

        <p className="text-gray-300 text-base sm:text-lg md:text-xl leading-relaxed">
          I am a passionate Front-End Developer who loves transforming ideas
          into real, responsive, and beautiful websites. My focus is on clean
          UI, animations, and seamless user experiences.
        </p>
      </section>

      <Footer />
    </main>
  );
}

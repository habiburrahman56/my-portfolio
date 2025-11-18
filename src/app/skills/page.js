import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Skills() {
  const skills = ["HTML", "CSS", "JavaScript", "Tailwind ", "React", "Next.js", "TypeScript", "Wordpress"];

  return (
    <main className="bg-black text-white min-h-screen">
      <Navbar />

      <section className="max-w-6xl mx-auto py-32 px-6">
        <h2 className="text-4xl font-semibold text-center mb-12">My Skills</h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
          {skills.map((skill, i) => (
            <div
              key={i}
              className="p-6 border border-gray-700 bg-[#111] text-center rounded-xl"
            >
              {skill}
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Projects() {
  const items = [1, 2, 3, 4, 5, 6];

  return (
    <main className="bg-black text-white min-h-screen">
      <Navbar />

      <section className="max-w-6xl mx-auto py-32 px-6">
        <h2 className="text-4xl font-semibold text-center mb-12">My Projects</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((i) => (
            <div
              key={i}
              className="bg-[#111] p-6 rounded-xl border border-gray-700 hover:border-green-400 transition"
            >
              <div className="w-full h-40 bg-gray-800 rounded-lg mb-4"></div>
              <h3 className="text-xl font-semibold mb-2">Project {i}</h3>
              <p className="text-gray-400 text-sm">
                A professional project built with modern technologies.
              </p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}

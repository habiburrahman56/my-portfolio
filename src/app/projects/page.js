import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Projects() {
  return (
    <main className="bg-black text-white min-h-screen">
      <Navbar />

      <section className="max-w-6xl mx-auto py-20 px-6">
        <h2 className="text-4xl font-semibold text-center mb-12">
          My Projects
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Project 1 */}
          <a
            href="https://localhomeservice.eletemplate.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="bg-[#111] p-6 rounded-xl border border-gray-700 hover:border-green-400 transition cursor-pointer">
              <div className="w-full h-40 rounded-lg mb-4 overflow-hidden">
                <img
                  src="/Local-home-services.png"
                  alt="Local home service project"
                  className="w-full h-full object-cover object-center rounded-lg"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2 capitalize">
                local home service company
              </h3>
              <p className="text-gray-400 text-sm capitalize">
                A professional project built with modern technologies.
              </p>
            </div>
          </a>

          {/* Project 2 */}
          <a
            href="https://electrician.eletemplate.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="bg-[#111] p-6 rounded-xl border border-gray-700 hover:border-green-400 transition cursor-pointer">
              <div className="w-full h-40 rounded-lg mb-4 overflow-hidden">
                <img
                  src="/electricity.png"
                  alt="Electrician project"
                  className="w-full h-full object-cover object-center rounded-lg"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2 capitalize">
                electrician company
              </h3>
              <p className="text-gray-400 text-sm capitalize">
                A professional project built with modern technologies.
              </p>
            </div>
          </a>

          {/* Project 3 */}
          <a
            href="https://consultantfirm.eletemplate.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="bg-[#111] p-6 rounded-xl border border-gray-700 hover:border-green-400 transition cursor-pointer">
              <div className="w-full h-40 rounded-lg mb-4 overflow-hidden">
                <img
                  src="/consultantfirm.jpg"
                  alt="Consultant firm project"
                  className="w-full h-full object-cover object-center rounded-lg"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2 capitalize">
                consultant firm company
              </h3>
              <p className="text-gray-400 text-sm capitalize">
                A professional project built with modern technologies.
              </p>
            </div>
          </a>

          {/* Project 4 */}
          <a
            href="https://accounting.eletemplate.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="bg-[#111] p-6 rounded-xl border border-gray-700 hover:border-green-400 transition cursor-pointer">
              <div className="w-full h-40 rounded-lg mb-4 overflow-hidden">
                <img
                  src="/accounting.png"
                  alt="Accounting project"
                  className="w-full h-full object-cover object-center rounded-lg"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2 capitalize">
                accounting company
              </h3>
              <p className="text-gray-400 text-sm capitalize">
                A professional project built with modern technologies.
              </p>
            </div>
          </a>

          {/* Project 5 */}
          <a
            href="https://nelson.eletemplate.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="bg-[#111] p-6 rounded-xl border border-gray-700 hover:border-green-400 transition cursor-pointer">
              <div className="w-full h-40 rounded-lg mb-4 overflow-hidden">
                <img
                  src="/Nelson-barbershop.png"
                  alt="Nelson Barbershop project"
                  className="w-full h-full object-cover object-center rounded-lg"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2 capitalize">
                Nelson BarberShop
              </h3>
              <p className="text-gray-400 text-sm capitalize">
                A professional project built with modern technologies.
              </p>
            </div>
          </a>

          {/* Project 6 */}
          <a
            href="https://barberlabs.eletemplate.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="bg-[#111] p-6 rounded-xl border border-gray-700 hover:border-green-400 transition cursor-pointer">
              <div className="w-full h-40 rounded-lg mb-4 overflow-hidden">
                <img
                  src="/barberlabs.png"
                  alt="Barberlabs project"
                  className="w-full h-full object-cover object-center rounded-lg"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2 capitalize">
                Barberlabs
              </h3>
              <p className="text-gray-400 text-sm capitalize">
                A professional project built with modern technologies.
              </p>
            </div>
          </a>
        </div>

        {/* Centered Button */}
        <div className="mt-12 text-center">
          <Link href="https://demos.eletemplate.com" target="_blank" rel="noopener noreferrer">
            <button className="inline-block px-8 py-4 bg-green-400 text-black hover:bg-green-500 transition rounded-lg font-semibold capitalize">
              view all projects
            </button>
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
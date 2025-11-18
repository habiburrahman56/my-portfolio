// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";

// export default function Contact() {
//   return (
//     <main className="bg-black text-white min-h-screen">
//       <Navbar />

//       <section className="max-w-4xl mx-auto py-32 px-6">
//         <div className="text-center mb-12">
//           <h2 className="text-4xl font-semibold mb-4">Contact Me</h2>
//           <p className="text-gray-300">
//             Feel free to reach out for collaborations or project inquiries.
//           </p>
//         </div>

//         {/* Contact Form */}
//         <form className="flex flex-col gap-6 bg-white/10 px-4 py-10 lg:p-12 rounded-2xl backdrop-blur">
//           {/* Name */}
//           <div className="flex flex-col text-left">
//             <label className="text-sm text-gray-300 mb-2">Your Name</label>
//             <input
//               type="text"
//               placeholder="Enter your name"
//               className="p-4 rounded-lg bg-black/40 border border-gray-700 text-white focus:border-green-400 focus:outline-none"
//             />
//           </div>

//           {/* Email */}
//           <div className="flex flex-col text-left">
//             <label className="text-sm text-gray-300 mb-2">Email Address</label>
//             <input
//               type="email"
//               placeholder="Enter your email"
//               className="p-4 rounded-lg bg-black/40 border border-gray-700 text-white focus:border-green-400 focus:outline-none"
//             />
//           </div>

//           {/* Message */}
//           <div className="flex flex-col text-left">
//             <label className="text-sm text-gray-300 mb-2">Message</label>
//             <textarea
//               rows="5"
//               placeholder="Write your message here..."
//               className="p-4 rounded-lg bg-black/40 border border-gray-700 text-white focus:border-green-400 focus:outline-none"
//             ></textarea>
//           </div>

//           {/* Email Button */}
//           <button
//             type="submit"
//             className="w-full py-4 bg-green-400 text-black font-semibold rounded-lg hover:bg-green-500 transition"
//           >
//             Send Email Directly
//           </button>
//         </form>
//       </section>

//       <Footer />
//     </main>
//   );
// }


















import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Contact() {
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

        {/* Two Columns: Desktop/Tablet side by side, Mobile stacked */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Left: Profile / Info */}
          <div className="flex flex-col items-center md:items-start gap-6 bg-white/10 px-6 py-10 lg:p-12 rounded-2xl backdrop-blur text-center">
            <img
              src="/my-image.png" // Replace with your image path
              alt="Munna"
              className="w-40 h-40 rounded-full object-cover"
            />
            <div className="mt-4 text-left w-full">
              <h3 className="text-2xl font-semibold capitalize"> Munna</h3>
              <p className="text-gray-300 mt-2">Front-End Web Developer &  Wordpress Specialist</p>

              <div className="mt-6 flex flex-col gap-2.5 text-gray-300">
                <p>
                  <span className="font-semibold text-green-400">Phone:</span> +880 01314902856
                </p>
                <p>
                  <span className="font-semibold text-green-400">Email:</span> habiburrahmanmunna56@gmail.com
                </p>
                <p>
                  <span className="font-semibold text-green-400">Location:</span> Sylhet, Bangladesh
                </p>
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <form className="flex flex-col gap-6 bg-white/10 px-4 py-10 lg:p-12 rounded-2xl backdrop-blur">
            <div className="flex flex-col text-left">
              <label className="text-sm text-gray-300 mb-2">Your Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="p-4 rounded-lg bg-black/40 border border-gray-700 text-white focus:border-green-400 focus:outline-none"
              />
            </div>

            <div className="flex flex-col text-left">
              <label className="text-sm text-gray-300 mb-2">Email Address</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="p-4 rounded-lg bg-black/40 border border-gray-700 text-white focus:border-green-400 focus:outline-none"
              />
            </div>

            <div className="flex flex-col text-left">
              <label className="text-sm text-gray-300 mb-2">Message</label>
              <textarea
                rows="5"
                placeholder="Write your message here..."
                className="p-4 rounded-lg bg-black/40 border border-gray-700 text-white focus:border-green-400 focus:outline-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-4 bg-green-400 text-black font-semibold rounded-lg hover:bg-green-500 transition"
            >
              Send Email Directly
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </main>
  );
}


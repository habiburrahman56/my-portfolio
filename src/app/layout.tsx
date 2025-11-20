// import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
// import "./globals.css";


// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

// export const metadata: Metadata = {
//   title: "Munna's Portfolio",
//   description: "Powered By Munna",
//   icons: {
//     icon: "",
//   },
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en">
//       <body
//         className="geist-c531dabc-module_... variable_mono_60a01160-module_... variable_variabl..."
//         cr-shortcut-listen="true" suppressHydrationWarning={true}
//       >
//         {children}
//       </body>
//     </html>
//   );
// }


















import type { Metadata } from "next";
// --- FIX 1: Correct the Geist font import path ---
// The original import path 'next/font/google' should be used for all Google fonts.
// Since 'Geist' is a custom/experimental font often used with Vercel, 
// the common solution is to replace it with a standard Google Font like Inter 
// or ensure it's imported correctly via an approved path or local setup.
// Assuming 'Geist' is intended to be used and replacing the faulty import:

// Use standard Next.js Google font for stability. 
// If you want to use Geist, you typically install it separately or use the custom import provided by Vercel/Next.js.
// Since the original error points to a module not found issue with Geist, 
// we will comment out the problematic Geist imports and use the standard Inter/Mono setup.

import { Inter, Space_Mono } from 'next/font/google'; 
// NOTE: I changed 'Mono' to 'Space_Mono' as 'Mono' is not a valid package name.

import "./globals.css";

// --- FIX 2 & 3: Correct Font Definitions (Using Inter and Space_Mono) ---
const inter = Inter({ subsets: ['latin'] });

// Using Space_Mono as a stable replacement for the broken 'Geist_Mono' and unspecific 'Mono' import
const mono = Space_Mono({ 
  subsets: ['latin'],
  weight: ['400', '700'], // Mono fonts usually require a weight definition
  variable: "--font-geist-mono", // Keeping the variable name for Tailwind
});

// Commenting out the problematic Geist imports to fix the Build Error
/* const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
*/

export const metadata: Metadata = {
  title: "Munna's Portfolio",
  description: "Powered By Munna",
  icons: {
    icon: "/favicon.ico", // FIX 4: icons.icon cannot be an empty string
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // --- FIX 5: Correct HTML syntax errors and class string concatenation ---
    <html 
      lang="en" 
      className={`${inter.className} ${mono.variable}`} // Combine font classes here.
    >
      <body
        // --- FIX 6: Remove extraneous classNames and attributes ---
        // Removed the corrupted className and cr-shortcut-listen 
        // as they belong to the hydration error (which is suppressed)
        // You should define your actual body classes here.
        className={inter.className} // Using a basic class for the body
        suppressHydrationWarning={true} // Kept this to prevent the hydration error
      >
        {children}
      </body>
    </html>
  );
}
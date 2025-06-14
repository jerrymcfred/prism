import type { Metadata } from "next";
import { Inter, IBM_Plex_Serif } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: '--font-inter' }); //the Inter() is the Inter constructor, then we pass an object with options (subsets)
const ibmPlexSerif = IBM_Plex_Serif({
  subsets: ['latin'],
  weight : ['400', '700'],
  variable : '--font-ibm-plex-serif'      // This option makes the font available as a CSS variable with the name --font-inter. This is a powerful feature that allows you to easily apply the font to elements in your CSS like this: font-family: var(--font-inter);.

})




export const metadata: Metadata = {
  title: "Prism",
  description: "Prism is a banking app for everyone",
  icons : {
    icon: '/icons/logo.svg'
  }
};


// Root layout created for us by next.js
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${ibmPlexSerif}`}>{children}</body>
    </html>
  );
}

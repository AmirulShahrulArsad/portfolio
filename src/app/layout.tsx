import type { Metadata } from "next";
import "@fontsource-variable/manrope";
import "@fontsource-variable/caveat";
import "./globals.css";
import { Backdrop } from "@/components/Backdrop";
import { Navbar, Footer } from "@/components/Layout";
export const metadata: Metadata = {
  ...(process.env.NEXT_PUBLIC_SITE_URL
    ? { metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL) }
    : {}),
  title: {
    default: "Amirul Shahrul — Digital Marketing & Technology",
    template: "%s | Amirul Shahrul",
  },
  description:
    "Aspiring digital marketing professional in Petaling Jaya. Explore internship contributions in advertising, analytics, landing pages, and reporting.",
  openGraph: {
    title: "Amirul Shahrul — Digital Marketing & Technology",
    description: "Creative thinking. Data-driven execution.",
    type: "website",
    locale: "en_MY",
  },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <Backdrop />
        <Navbar />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

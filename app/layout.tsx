import { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/app/components/Navbar";

export const metadata: Metadata = {
  metadataBase: new URL("https://jiun.me"),
  title: {
    default: "jiun",
    template: "%s | jiun",
  },
  description: "Software Engineer",
  openGraph: {
    title: "jiun",
    description: "Software Engineer",
    url: "https://jiun.me",
    siteName: "jiun",
    locale: "ko_KR",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex flex-col max-w-2xl mx-4 mt-8 mb-40 antialiased md:flex-row lg:mx-auto">
        <main className="flex flex-col flex-auto min-w-0 px-2 mt-6 md:px-0">
          <Navbar />
          {children}
        </main>
      </body>
    </html>
  );
}

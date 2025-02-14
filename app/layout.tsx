import ProviderComponent from "@/components/layouts/provider-component";
import "react-perfect-scrollbar/dist/css/styles.css";
import "../styles/tailwind.css";
import { Metadata } from "next";
import { Nunito } from "next/font/google";

export const metadata: Metadata = {
  title: {
    template: "%s | VRISTO - Multipurpose Tailwind Dashboard Template",
    default: "VRISTO - Multipurpose Tailwind Dashboard Template",
  },
  description: "Your app description",
  generator: "Next.js",
  manifest: "/manifest.json", // Ensures PWA manifest is loaded
  keywords: ["nextjs", "next14", "pwa", "next-pwa"],
  themeColor: "#ffffff",
  viewport: "width=device-width, initial-scale=1, minimum-scale=1, shrink-to-fit=no, viewport-fit=cover",
  icons: {
    icon: "/icons/icon-192x192.png",
    apple: "/icons/apple-touch-icon.png",
  },
};

const nunito = Nunito({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-nunito",
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className={nunito.variable}>
        <ProviderComponent>{children}</ProviderComponent>
      </body>
    </html>
  );
}

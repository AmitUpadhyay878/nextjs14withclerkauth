import "./globals.css";
import { Anuphan } from "next/font/google";
const inter = Anuphan({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <body className={inter.className}>
        {children}
        </body>
        </html>
  );
}

import "./globals.css";
import { ThemeProvider } from "./components/ThemeProvider";

export const metadata = {
  title: "My Portfolio",
  description: "Personal developer portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
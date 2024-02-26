import { DM_Mono as dots} from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";

const inter = dots({   weight: '400',subsets: ["latin"] });

export const metadata = {
  title: "Desktop Clock",
  description: "Created by Apoorv Yadav, SDE",
  icons:{
    icon:[
      {
        media:"(prefers-color-scheme: dark)",
        url:"/clock-light.svg",
        href:"/clock-light.svg",
      },
      {
        media:"(prefers-color-scheme: light)",
        url:"/clock.svg",
        href:"/clock.svg",
      }
    ]
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        storageKey="desk-clock-theme"
      >
        {children}
      </ThemeProvider>
      </body>
    </html>
  );
}

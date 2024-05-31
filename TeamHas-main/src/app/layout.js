import { AnimationProvider } from "@/components/Animation/AnimationProvider";
import "./globals.css";
import { Suspense } from "react";
import Loading from "./loading";


export const metadata = {
  title: "TeamHAS Visionz",
  description: "TeamHAS Visionz",
  icons: {
    icon: "/favicon.png", // /public path
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"></meta>
      </head>
      <body>
        
        <Suspense fallback={<Loading />} />
        <AnimationProvider>
          {children}
        </AnimationProvider>
      </body>
    </html>
  );
}

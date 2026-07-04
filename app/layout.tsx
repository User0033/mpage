import type { Metadata } from "next";
import { Electrolize } from "next/font/google";

import Header from "@/components/header/header";
import { Provider } from "@/components/ui/provider";

export const metadata: Metadata = {
  icons: {
    icon: "/images/logo.png",
  },
  description:
    "Foxel Visuals is a creative agency that specializes in providing high-quality visual content for businesses and individuals. We offer a wide range of services, including photography, videography, graphic design, and animation. Our team of experienced professionals is dedicated to delivering exceptional results that exceed our clients' expectations.",
};

const bricolage = Electrolize({
  variable: "--font-electrolize",
  subsets: ["latin"],
  weight: "400",
});

export default function RootLayout(
  props: Readonly<{ children: React.ReactNode }>,
) {
  const { children } = props;

  return (
    <html className={bricolage.variable} lang="en" suppressHydrationWarning>
      <body style={{ backgroundColor: "rgba(20, 20, 20, 0.98)" }}>
        <Provider>
          <Header />
          {children}
        </Provider>
      </body>
    </html>
  );
}

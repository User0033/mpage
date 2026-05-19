import { Electrolize } from "next/font/google";

import Header from "@/components/header/header";
import { Provider } from "@/components/ui/provider";

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

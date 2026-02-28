"use client";

import Header from "@/components/header/header";
import { Provider } from "@/components/ui/provider";

export default function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props;
  return (
    <html suppressHydrationWarning>
      <body>
        <Provider>
          <Header>{children}</Header>
        </Provider>
      </body>
    </html>
  );
}

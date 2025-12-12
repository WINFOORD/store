import "./globals.css";

export const metadata = {
  title: "خرید آجیل - آجیل سرای بابل",
  description: "آجیل سرای بابل",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html >
      <body>{children}</body>
    </html>
  )
}

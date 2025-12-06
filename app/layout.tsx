import "./globals.css";
import ClientLayout from "./ClientLayout";

// Disable automatic preload to avoid 'preloaded but not used' warnings

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
      </head>
      <body  suppressHydrationWarning>
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}
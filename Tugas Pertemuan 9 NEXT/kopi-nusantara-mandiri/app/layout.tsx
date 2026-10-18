import "./globals.css";

export const metadata = {
  title: "Kopi Nusantara",
  description: "Artisan coffee from Nusantara",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body>
        {children} 
      </body>
    </html>
  );
}

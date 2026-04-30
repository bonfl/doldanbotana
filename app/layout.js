import "./globals.css";

export const metadata = {
  title: "CIDA-E",
  description: "Centro de Investigación y Difusión de Astronomía",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
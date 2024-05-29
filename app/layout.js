import "../styles/main.css";
import Header from "../components/Header/Header"

export const metadata = {
  title: "WP-API",
  description: "WP API to generate valorant agents",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}

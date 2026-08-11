import "./globals.css";
import Header from "@/components/header/Header";

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-br">
      <body>
        <Header />
        <main>
          {children}
        </main>
        <script src="https://kit.fontawesome.com/ba7c57d421.js"></script>
      </body>
    </html>
  );
}

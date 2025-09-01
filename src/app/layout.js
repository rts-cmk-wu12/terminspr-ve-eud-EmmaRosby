import "./globals.scss";

export const metadata = {
  title: {
    template: "%s | Landrup Dans",
    default: "Landrup Dans",
  },
  description: "Landrup Dans er en lille danseskole for både børn og voksne",
}
export default function Home({children}) {
  return (
    <html lang="da">
      <body>
       {children}
      </body>
    </html>
  );
}

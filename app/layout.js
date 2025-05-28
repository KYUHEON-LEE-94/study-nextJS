export const metadata = {
  title: 'My Next App',
  description: 'Don Quijote 최저가 비교',
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko"
    suppressHydrationWarning
    >
      <body>
        <header>
          <h1>Don Quijote 가격 비교</h1>
        </header>

        <main>{children}</main>

        <footer>
          <p>© 2025 Don Quijote Price Compare</p>
        </footer>
      </body>
    </html>
  );
}
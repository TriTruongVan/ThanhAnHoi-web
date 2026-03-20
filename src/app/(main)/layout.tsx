import Header from "@/src/components/Header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="min-w-[360px]"
      >
        <Header/>
        {children}
      </body>
    </html>
  );
}
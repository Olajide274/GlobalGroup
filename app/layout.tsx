import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Luxury Furniture Showroom Experience',
  description: 'Premium digital inventory display engine optimized for local mobile performance networks.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-stone-50 antialiased">
        {children}
      </body>
    </html>
  );
}

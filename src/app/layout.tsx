import 'primereact/resources/themes/lara-light-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import "./globals.css";
import CustomHeaderScript from '@/src/components/CustomHeaderScript';
import { Metadata } from 'next';

export const metadata: Metadata = {
  keywords: [
    "tiệc cưới",
    "nhà hàng tiệc cưới",
    "đặt tiệc cưới",
    "đặt bàn tiệc cưới",
    "thanh an hoi",
    "thanh an hoi wedding",
    "tổ chức tiệc cưới",
    "wedding banquet"
  ],
  title: {
    default: "Thanh An Hội Wedding",
    template: "%s | Thanh An Hoi Wedding"
  },
  description:
    "Hệ thống quản lý và đặt tiệc cưới Thanh An Hội. Dịch vụ tổ chức tiệc cưới chuyên nghiệp, không gian sang trọng, thực đơn đa dạng và đặt bàn nhanh chóng.",

  openGraph: {
    title: "Thanh An Hội Wedding",
    description:
      "Dịch vụ tổ chức tiệc cưới Thanh An Hội - đặt tiệc cưới nhanh chóng, quản lý sự kiện và bàn tiệc tiện lợi.",
    url: "https://thanh-an-hoi.vn",
    siteName: "Thanh An Hội Wedding",
    type: "website",
    images: [
      {
        url: "/images/wedding-banner.jpg",
        width: 1200,
        height: 630,
        alt: "Thanh An Hoi Wedding"
      }
    ]
  },

  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" }
    ],
    apple: "/apple-touch-icon.png"
  },

  manifest: "/site.webmanifest"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <CustomHeaderScript />
      {children}
    </>
  );
}

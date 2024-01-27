import { Metadata } from "next";
import React from "react";

const defaultTitle = "Tuslipid";
const defaultDescription = "Xuan Khoa Tu Nguyen's personal website";
const defaultSEOImage = '/seo/menu-preview.jpg';
const defaultURL = "https://xuankhoatu.com/";

export const metadata: Metadata = {
  title: {
    template: defaultTitle + " - %s",
    default: defaultTitle
  },
  description: defaultDescription,
  authors: {
    name: "Xuan Khoa Tu Nguyen"
  },
  metadataBase: new URL(defaultURL),
  openGraph: {
    type: "website",
    title: defaultTitle,
    description: defaultDescription,
    url: defaultURL,
    siteName: defaultTitle,
    images: defaultSEOImage
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: defaultDescription,
    creator: "Xuan Khoa Tu Nguyen",
    images: {
      url: defaultURL,
      alt: "Tuslipid preview"
    },
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="css/style.css" />
      </head>
      <body>{children}</body>
    </html>
  );
}

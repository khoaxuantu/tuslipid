import { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import React from "react";
import ThemeProvider from "@/lib/provider/theme.provider";

const defaultTitle = "Tuslipid";
const defaultDescription = "Xuan Khoa Tu Nguyen's personal website";
const defaultSEOImage = "/seo/menu-preview.jpg";
const defaultURL = process.env.HOST_URL as string;

export const metadata: Metadata = {
  title: {
    template: defaultTitle + " - %s",
    default: defaultTitle,
  },
  description: defaultDescription,
  authors: {
    name: "Xuan Khoa Tu Nguyen",
  },
  metadataBase: new URL(defaultURL),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: "website",
    title: defaultTitle,
    description: defaultDescription,
    url: defaultURL,
    siteName: defaultTitle,
    images: defaultSEOImage,
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: defaultDescription,
    creator: "Xuan Khoa Tu Nguyen",
    images: {
      url: defaultSEOImage,
      alt: "Tuslipid preview",
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="/css/style.css" />
        <link rel="stylesheet" href="/css/themes/light.css" />
        <link rel="stylesheet" href="/css/themes/dark.css" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={`${defaultURL}/logo/apple-touch-icon.png`}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href={`${defaultURL}/logo/favicon-32x32.png`}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href={`${defaultURL}/logo/favicon-16x16.png`}
        />
        <link rel="manifest" href={`${defaultURL}/logo/site.webmanifest`}></link>
      </head>
      <body>
        <ThemeProvider>
          {children}
        </ThemeProvider>
        <SpeedInsights />
      </body>
    </html>
  );
}

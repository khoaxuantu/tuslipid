import { Metadata } from "next";
import Link from "next/link";

const notFoundDescription =
  "Oi ~ This URL does not exist, get to my page at https://xuankhoatu.com";
export const metadata: Metadata = {
  title: "404",
  description: notFoundDescription,
  openGraph: {
    title: "404 | Page not found",
    description: notFoundDescription,
  },
  twitter: {
    title: "404 | Page not found",
    description: notFoundDescription,
  },
};

export default function NotFound() {
  return (
    <>
      <div className="sl-l-container menu-l-wrapper center transition-menu">
        <header>
          <h1>404</h1>
          <div className="mt-2">
            Oi ~ This URL does not exist.
            <br />
            <br />
            <Link href="/">
              Get back to my homepage...
            </Link>
          </div>
        </header>
      </div>
    </>
  );
}

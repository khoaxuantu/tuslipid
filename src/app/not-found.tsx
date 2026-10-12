import { Metadata } from "next";
import Link from "next/link";

import "./not-found.scss";

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
    <main id="notfound">
      <div className="container">
        <header>
          <h1>404</h1>
          <br />
          <div>
            Oi ~ This URL does not exist.
            <br />
            <br />
            <Link href="/">Get back to my homepage...</Link>
          </div>
        </header>
      </div>
    </main>
  );
}

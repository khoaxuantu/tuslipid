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
      <div className="background-overlay"></div>
      <div className={`sl-l-container menu-l-wrapper center transition-menu`}>
        <div className="header-grp center">
          <div className="sl-c-txt__header">
            <b>404</b>
          </div>
          <div className="sl-c-txt__body mt-2">
            Oi ~ This URL does not exist.
            <br />
            <br />
            <Link href="/" style={{ color: "bisque" }}>
              Get back to my homepage...
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

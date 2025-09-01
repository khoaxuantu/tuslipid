import Link from "next/link";

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
            <Link href="/blogs">Get to my blogs page...</Link>
          </div>
        </header>
      </div>
    </>
  );
}

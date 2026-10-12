import Link from "next/link";

import "../../not-found.scss";

export default function NotFound() {
  return (
    <main id="notfound">
      <div className="container">
        <h1>404</h1>
        <div>
          Oi ~ This URL does not exist.
          <br />
          <br />
          <Link href="/blogs">Get to my blogs page...</Link>
        </div>
      </div>
    </main>
  );
}

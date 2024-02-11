import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <div className="sl-c-overlay"></div>
      <div className={`sl-l-container menu-l-wrapper center transition-menu`}>
        <div className="sl-l-container__header center">
          <div className="sl-c-txt__header">
            <b>404</b>
          </div>
          <div className="sl-c-txt__body mt-2">
            Oi ~ This URL does not exist.
            <br />
            <br />
            <Link href="/blogs" style={{ color: "bisque" }}>
              Get to my blogs page...
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

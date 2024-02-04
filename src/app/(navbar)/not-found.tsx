import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <div className="background-overlay"></div>
      <div className={`container menu-wrapper center transition-menu`}>
        <div className="header-grp center">
          <div className="header-txt">
            <b>404</b>
          </div>
          <div className="body-txt mt-2">
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

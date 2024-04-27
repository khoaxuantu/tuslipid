import Link from "next/link";

export default function GetInTouch() {
  return (
    <section className="mb-5 row">
      <h2 className="col-4 pt-2 pb-2 pe-5">
        Get in touch
      </h2>
      <div className="col-8 pt-2">
        <p>
          I am primarily active in Linkedin, Discord, Github, Gmail, and Facebook, but I also have other connections in
          Reddit, DEV Community, or CodePen.
        </p>
        <p className="pt-2">
          <Link href="/contact">
            ~ Feel free to connect with me ~
          </Link>
        </p>
      </div>
    </section>
  );
}

import Link from "next/link";

export default function GetInTouch() {
  return (
    <section className="mb-5 row">
      <h3 className="sl-c-txt__header col-4 pe-5">
        Get in touch
      </h3>
      <div className="col-8">
        <p className="pt-2">
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

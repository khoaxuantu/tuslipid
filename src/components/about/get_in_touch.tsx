import Link from "next/link";

export default function GetInTouch() {
  return (
    <section id="get-in-touch">
      <aside>
        <h2>Get in touch</h2>
      </aside>
      <div className="content">
        <p>
          I am primarily active in Linkedin, Discord, Github, Gmail, and
          Facebook, but I also have other connections in Reddit, DEV Community,
          or CodePen.
        </p>
        <p>
          <Link href="/contact">~ Feel free to connect with me ~</Link>
        </p>
      </div>
    </section>
  );
}

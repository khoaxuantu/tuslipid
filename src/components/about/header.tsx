import Button from "@/lib/factory/button";

export default function AboutHeaderGrp() {
  return (
    <header>
      <section>
        <h1 className="pt-2 pb-2">Hi there! I'm Tu</h1>
        <h5 className="mt-2">
          <span>Xuan Khoa Tu Nguyen |</span> <span>阮春科秀 | </span> <span>Tu |</span>{" "}
          <span>Nguyễn Xuân Khoa Tú</span>
        </h5>
        <blockquote className="mt-3">~ You can call me by any name ~</blockquote>
        <blockquote className="mt-3">
          <a
            href="https://drive.google.com/file/d/1UdFJgT35HysZGTpfk86I3E8Mcg2vrfv3/view?usp=share_link"
            target="_blank"
            rel="noreferrer"
          >
            Resume
          </a>{" "}
          |{" "}
          <a
            href="https://drive.google.com/file/d/1XxdNzIyDktPseomnn0HszhgMyfEW8TtV/view?usp=share_link"
            target="_blank"
            rel="noreferrer"
          >
            CV
          </a>
        </blockquote>
      </section>
      <section>
        <img
          src="https://media.giphy.com/media/j0HjChGV0J44KrrlGv/giphy.gif"
          alt="typing cat"
          width={300}
        />
      </section>
      <section>
        <i>
          <h6>Which song is describing my emotion the most?</h6>
          <br />
          <a href="https://youtu.be/Bk8IQIv7MuQ?si=S36tuaYsjr3DRwFv">Solo ~ Myles Smith</a>
        </i>
      </section>
      <hr></hr>
    </header>
  );
}

export default function AboutHeaderGrp() {
  return (
    <header>
      <section>
        <h1>Hi there! I'm Tu</h1>
        <h5>
          <span>Xuan Khoa Tu Nguyen |</span> <span>阮春科秀 | </span>{" "}
          <span>Tu |</span> <span>Nguyễn Xuân Khoa Tú</span>
        </h5>
        <blockquote>~ You can call me by any name ~</blockquote>
        <blockquote>
          <a
            href="https://drive.google.com/file/d/1UdFJgT35HysZGTpfk86I3E8Mcg2vrfv3/view?usp=share_link"
            target="_blank"
            rel="noreferrer"
          >
            Resume/CV
          </a>
        </blockquote>
      </section>
      <section style={{ overflow: "auto" }}>
        <img src="/memeo.gif" alt="typing cat" width={300} height={215} />
      </section>
      <section>
        <i>
          <h6>Which song is describing my emotion the most?</h6>
          <a href="https://youtu.be/Bk8IQIv7MuQ?si=S36tuaYsjr3DRwFv">
            Solo ~ Myles Smith
          </a>
        </i>
      </section>
    </header>
  );
}

import { Link } from "react-router-dom";

export default function AboutHeaderGrp () {
    return (
      <div className='header-grp'>
        <div className="header-txt">
          <b>Hi there! I'm Tu</b>
        </div>
        <div className='body-txt mt-2'>
          <b>
            <span>Xuan Khoa Tu Nguyen |</span>{" "}
            <span>阮春科秀 | </span>{" "}
            <span>Tu |</span>{" "}
            <span>Nguyễn Xuân Khoa Tú</span>
          </b>
        </div>
        <div className="body-txt mt-3">
          ~ You can call me by any name ~
        </div>
        <div className='body-txt mt-3'>
          <Link to="/">Menu</Link> | {" "}
          <a href="https://drive.google.com/file/d/1UdFJgT35HysZGTpfk86I3E8Mcg2vrfv3/view?usp=share_link" target='_blank' rel="noreferrer">Resume</a> | {" "}
          <a href="https://drive.google.com/file/d/1XxdNzIyDktPseomnn0HszhgMyfEW8TtV/view?usp=share_link" target='_blank' rel='noreferrer'>CV</a>
        </div>
        <hr></hr>
      </div>
    );
}

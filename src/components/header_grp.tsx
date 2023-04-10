import * as React from 'react';

export interface IMenuHeaderGrpProps {
}

export function MenuHeaderGrp (props: IMenuHeaderGrpProps) {
  return (
    <div className='header-grp'>
        <img className='avatar' src="tuslipid.jpg" 
            alt="Tuslipid's avatar" height={128} width={128} />
        <div className="header-txt"><b>Xuan Khoa Tu Nguyen</b></div>
        <hr />
        <div className="description-txt mt-3">IATP-ME/CS @ NTUST</div>
        <hr />
    </div>
  );
}

export function AboutHeaderGrp () {
  return (
    <div className='header-grp'>
      <div className="header-txt">
        <b>Hi there! I'm Tu</b>
      </div>
      <div className='description-txt mt-2'>
        <b>Xuan Khoa Tu Nguyen | 阮春科秀 | Tu | Nguyễn Xuân Khoa Tú</b>
      </div>
      <div className="description-txt mt-3">
        ~ You can call me by any name ~
      </div>
      <div className='description-txt mt-3'>
        <a href="/">Menu</a> | {" "}
        <a href="https://drive.google.com/file/d/1UdFJgT35HysZGTpfk86I3E8Mcg2vrfv3/view?usp=share_link" target='_blank' rel="noreferrer">Resume</a>
      </div>
      <hr></hr>
    </div>
  );
}

export function ProjectsPageHeaderGrp() {
  return (
    <div className='header-grp'>
      <div className='header-txt'>
        <b>Projects</b>
      </div>
      <div className='description-txt mt-2'>
        I just have studied in Information Technology for two and a half years, {" "}
        but luckily have some fun works done.
      </div>
    </div>
  );
}

export function BlogsPageHeaderGrp() {
  return (
    <div className='header-grp'>
      <div className='header-txt'>
        <b>Blogs</b>
      </div>
    </div>
  );
}
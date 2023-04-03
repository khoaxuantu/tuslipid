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
        ~ Whatever you call me in these names ~
      </div>
    </div>
  );
}
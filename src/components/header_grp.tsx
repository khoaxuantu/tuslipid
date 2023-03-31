import * as React from 'react';

export interface IMenuHeaderGrpProps {
}

function MenuHeaderGrp (props: IMenuHeaderGrpProps) {
  return (
    <div className='header-grp'>
        <img className='avatar' src="tuslipid.jpg" 
            alt="Tuslipid's avatar" height={128} width={128} />
        <div className="header-txt"><b>Xuan Khoa Tu Nguyen</b></div>
        <hr />
        <div className="description-txt">IATP-ME/CS @ NTUST</div>
        <hr />
    </div>
  );
}

export default MenuHeaderGrp;
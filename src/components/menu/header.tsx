import { useState, MouseEvent } from "react";

export default function MenuHeaderGrp () {
    const avaURLs : string[] = ["tuslipid_real.webp", "tuslipid.webp"];
    const [avaIndex, setAvaIndex] = useState(0);

    function avaHandler(e: MouseEvent) {
      setAvaIndex(avaIndex => (avaIndex + 1) % avaURLs.length);
      e.preventDefault();
    }

    return (
      <div className='header-grp'>
        <button className='avatar-grp' onClick={e => avaHandler(e)}>
          {avaURLs.map((avaURL, index) => {
            let isCur = "";
            if (index === avaIndex) isCur = " is-current";
            return <img key={index} className={'transition-ava avatar'+isCur} src={avaURL}
              alt="Tuslipid's avatar" height={160} width={160} />;
          })}
        </button>
        <div className="header-txt-menu mt-3"><b>Xuan Khoa Tu Nguyen</b></div>
        <div className="body-txt-menu mt-3"><b>SWE @ Pixta</b></div>
      </div>
    );
}

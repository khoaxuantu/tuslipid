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
              alt="Tuslipid's avatar" height={128} width={128} />;
          })}
        </button>
        <div className="header-txt-menu"><b>Xuan Khoa Tu Nguyen</b></div>
        <hr />
        <div className="body-txt-menu mt-3">SWE @ Pixta</div>
        <hr />
      </div>
    );
}

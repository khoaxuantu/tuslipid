import { useEffect, useState } from "react";
import { BsGithub } from "react-icons/bs";

function Copyright(props: { copyright_class?: string }) {
    const [year, setYear] = useState<number>();
    useEffect(() => {
        setYear(new Date().getFullYear());
    }, []);

    return (
        <div className={`${props.copyright_class}`}>
            <div>
                <a href="https://github.com/khoaxuantu/tuslipid" target="_blank" rel="noreferrer" aria-label="web source code">
                    <BsGithub opacity={0.8} color="black" />
                </a>
            </div>
            Built and designed by Xuan Khoa Tu Nguyen with {" "}
            <a href="https://react.dev/" target="_blank" rel="noreferrer">React</a>, {" "}
            <a href="https://www.typescriptlang.org/" target="_blank" rel="noreferrer">TypeScript</a> and {" "}
            <a href="https://sass-lang.com/" target="_blank" rel="noreferrer">Sass</a>.<br></br>
            Copyright © {year} All Rights Reserved.
        </div>
    );
}

export default Copyright;

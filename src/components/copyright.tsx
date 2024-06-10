import GithubIcon from "@/lib/factory/icons/GithubIcon";

function Copyright(props: { className?: string }) {
  const year = new Date().getFullYear();

  return (
    <small className={`${props.className}`}>
      <div>
        <a
          href="https://github.com/khoaxuantu/tuslipid"
          target="_blank"
          rel="noreferrer"
          aria-label="web source code"
        >
          <GithubIcon
            opacity={0.8}
            color="var(--md-sys-color-on-surface)"
            width="1em"
            height="1em"
          />
        </a>
      </div>
      Built and designed by Xuan Khoa Tu Nguyen with{" "}
      <a href="https://react.dev/" target="_blank" rel="noreferrer">
        React
      </a>
      ,{" "}
      <a href="https://www.typescriptlang.org/" target="_blank" rel="noreferrer">
        TypeScript
      </a>{" "}
      and{" "}
      <a href="https://sass-lang.com/" target="_blank" rel="noreferrer">
        Sass
      </a>
      .<br></br>
      Copyright © 2023-{year} All Rights Reserved.
    </small>
  );
}

export default Copyright;

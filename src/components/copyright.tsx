
function Copyright(props: { copyright_class?: string }) {
    const year = new Date().getFullYear();
    return (
        <div className={`${props.copyright_class} pt-4`}>
            Created by Xuan Khoa Tu Nguyen with {" "}
            <a href="https://react.dev/">React</a>, {" "}
            <a href="https://www.typescriptlang.org/">TypeScript</a> and {" "}
            <a href="https://sass-lang.com/">Sass</a> {" "}
            © {year}.
        </div>
    );
}

export default Copyright;
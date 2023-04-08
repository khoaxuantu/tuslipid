function Copyright() {
    const year = new Date().getFullYear();
    return (
        <div className="copyright-txt pt-4 pb-3">
            Created by Xuan Khoa Tu Nguyen with {" "}
            <a href="https://react.dev/">React</a>, {" "}
            <a href="https://www.typescriptlang.org/">TypeScript</a> and {" "}
            <a href="https://sass-lang.com/">Sass</a> {" "}
            © {year}.
        </div>
    );
}

export default Copyright;
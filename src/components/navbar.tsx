import { DefaultButton } from "../lib/factory/buttonBase";
import { navBtnInfoList } from "../lib/general_info";


function Navbar() {
    function navHandler(navBtnDisplay: string, navBarDisplay: string): void {
        const navbtn = document.getElementsByClassName('navbar-trigger')[0] as HTMLElement;
        navbtn.style.display = navBtnDisplay;
        const navbar = document.getElementsByClassName('navbar-menu')[0] as HTMLElement;
        navbar.style.display = navBarDisplay;
    }

    // Close navbar event handler, when you click everywhere except the opening navbar,
    // the navber should be closed
    document.addEventListener('click', e => {
        const target = e.target as HTMLInputElement;
        if (target.className !== 'navbar-trigger' &&
            target.className !== 'navbar-menu') {
            navHandler('block', 'none');
        }
    });

    return (
        <nav className="navbar navbar-wrap">
            <button type="button" className="navbar-trigger" onClick={() => navHandler('none', 'block')} aria-label="navbar"></button>
            <ul className="navbar-menu menu-animation">
                <li key="Home">
                    <DefaultButton url="/" content="Home" />
                </li>
                {navBtnInfoList.map(btnProps => {
                    return (
                        <li key={btnProps.content}>
                            <DefaultButton 
                                url={btnProps.url} 
                                content={btnProps.content} />
                        </li>
                    );
                })}
                <li key="Projects">
                    <DefaultButton url="/projects" content="Projects"/>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
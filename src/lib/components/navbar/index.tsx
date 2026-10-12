import { NAV_BTN_INFO_LIST } from "@/lib/general_info";
import Link from "next/link";
import ButtonTheme from "../button/theme";
import "./index.scss";

export function Navbar() {
  return (
    <nav className="desktop">
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        {NAV_BTN_INFO_LIST.map((btnProps) => {
          return (
            <li key={btnProps.content}>
              <Link href={btnProps.url}>{btnProps.content}</Link>
            </li>
          );
        })}
        <li style={{ float: "right" }}>
          <ButtonTheme />
        </li>
      </ul>
    </nav>
  );
}

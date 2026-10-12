import { SOCIAL_MEDIA_INFO_LIST } from "@/lib/general_info";
import Link from "next/link";

import "./page.scss";

function Contact() {
  return (
    <main id="contact">
      <div className="container">
        <header>
          <h2>
            ~ Oi ~<br></br>
            Say hello to me by one of the following {":)"}
          </h2>
        </header>
        <nav>
          {SOCIAL_MEDIA_INFO_LIST.map((btnProp) => {
            return (
              <a
                href={btnProp.url}
                key={btnProp.id}
                target="__blank"
                rel="noopener"
              >
                <button id={btnProp.id}>
                  <btnProp.icon width={24} height={24} />
                </button>
              </a>
            );
          })}
        </nav>
        <Link href="/" id="go-back" prefetch={true}>
          Home
        </Link>
      </div>
    </main>
  );
}

export default Contact;

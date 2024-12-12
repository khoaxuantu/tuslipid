'use client'

import { useEffect, useState } from "react";

interface TocHeading {
  id: string;
  text: string;
  level: string;
}

const TOC_TEXT = "On This Page";

export function TableOfContents() {
  const [headings, setHeadings] = useState<TocHeading[]>([]);

  useEffect(() => {
    const elements: NodeListOf<HTMLElement> = document.querySelectorAll("h1, h2, h3");
    const tmp: TocHeading[] = [];

    elements.forEach(elem => {
      if (isToc(elem) || isTitle(elem)) return;
      tmp.push({
        id: elem.id,
        text: elem.innerText,
        level: elem.nodeName[1],
      });
    })

    setHeadings(tmp);
  }, [])

  return(
    <section className="col-4 blog-c-toc fade-in-down">
      <h2>{TOC_TEXT}</h2>
      { !headings ? <FetchingContentNoti /> : <TocList headings={headings} /> }
    </section>
  );
}

function isToc(elem: HTMLElement): boolean {
  return elem.innerText == TOC_TEXT;
}

function isTitle(elem: HTMLElement): boolean {
  return elem.id == "blog-title";
}

function FetchingContentNoti() {
  return(
    <div><i>Fetching contents...</i></div>
  );
}

function TocList({ headings }: { headings: TocHeading[]}) {
  return(
    <div className="blog-c-toc__details">
      <details open>
        <ul>
          {
            headings.map(heading => {
              return(
                <li key={heading.id} className={formatTocListClass(heading.level)}>
                  <a href={`#${heading.id}`}>
                    {heading.text}
                  </a>
                </li>
              )
            })
          }
        </ul>
      </details>
    </div>
  );
}

function formatTocListClass(headingLevel: string) {
  return `blog-c-toc__h${headingLevel}`;
}

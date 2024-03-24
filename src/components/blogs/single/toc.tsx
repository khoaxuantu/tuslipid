'use client'

import { useEffect, useState } from "react";

interface TocHeading {
  id: string;
  text: string;
  level: string;
}

export function TableOfContents() {
  const [headings, setHeadings] = useState<TocHeading[]>([]);

  useEffect(() => {
    const elements: NodeListOf<HTMLElement> = document.querySelectorAll("h1, h2, h3");
    const tmp: TocHeading[] = [];

    elements.forEach(elem => {
      if (elem.innerText == "Table of Contents") return;
      tmp.push({
        id: elem.id,
        text: elem.innerText,
        level: elem.nodeName[1],
      });
    })

    setHeadings(tmp);
  }, [])

  return(
    <div className="col-4 blog-c-toc pe-5">
      <h1>Table of Contents</h1>
      { !headings ? <FetchingContentNoti /> : <TocList headings={headings} /> }
    </div>
  );
}

function FetchingContentNoti() {
  return(
    <div><i>Fetching contents...</i></div>
  );
}

function TocList({ headings }: { headings: TocHeading[]}) {
  return(
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
  );
}

function formatTocListClass(headingLevel: string) {
  return `blog-c-toc__h${headingLevel}`;
}

"use client";

import { useState } from "react";
import { TabSelector, TabContent } from "../lib/factory/tabBase";
import { WORK_INFO_LIST } from "../lib/general_info";

function TabList() {
  const [curId, setCurId] = useState("0");

  function tabHandler(id: string) {
    const initialTabSelector = document.getElementById(`tabselector_${curId}`) as HTMLElement;
    const initialTabContent = document.getElementById(`tabcontent_${curId}`) as HTMLElement;
    const curTabSelector = document.getElementById(`tabselector_${id}`) as HTMLElement;
    const curTabContent = document.getElementById(`tabcontent_${id}`) as HTMLElement;

    initialTabSelector.classList.remove("is-current");
    initialTabContent.classList.remove("is-current");
    curTabSelector.classList.add("is-current");
    curTabContent.classList.add("is-current");

    setCurId(id);
  }

  return (
    <div className="pb-2 row col-8">
      <div className="about-c-tab__list col-3 mb-3">
        {WORK_INFO_LIST.map((tabProps, index) => {
          let id = index.toString();
          let isCurrent = id === curId ? " is-current" : "";
          return (
            <TabSelector
              id={"tabselector_" + id}
              key={id}
              className={"about-c-tab__vertical p-2" + isCurrent}
              tabHandler={() => tabHandler(id)}
              {...tabProps}
            />
          );
        })}
      </div>
      <div className="about-c-tab__content col-9">
        {WORK_INFO_LIST.map((tabProps, index) => {
          let id = index.toString();
          let isCurrent = id === curId ? "is-current " : "";
          return (
            <TabContent
              key={id}
              id={"tabcontent_" + id}
              className={isCurrent + "content"}
              {...tabProps}
            />
          );
        })}
      </div>
    </div>
  );
}

export default TabList;

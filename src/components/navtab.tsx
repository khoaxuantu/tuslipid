import { useState } from "react";
import { TabSelector, TabContent } from "../lib/factory/tabBase";
import { worksInfoList } from "../lib/general_info";


function TabList() {
    const [curId, setCurId] = useState("1");

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
        <div className="p-2 row works-grp">
            <div className="col-3 tab-list">
                {
                    worksInfoList.map(tabProps => {
                        let isCurrent = tabProps.id === curId ? " is-current" : "";
                        return <TabSelector 
                            key={tabProps.id} 
                            className={"vertical-tab p-2"+isCurrent}
                            tabHandler={() => tabHandler(tabProps.id)}
                            {...tabProps} />;
                    })
                }
            </div>
            <div className="col-9 p-2 tab-content">
                {
                    worksInfoList.map(tabProps => {
                        let isCurrent = tabProps.id === curId ? "is-current " : "";
                        return <TabContent
                            key={tabProps.id}
                            className={isCurrent+"content transition-work-content"}
                            {...tabProps} />;
                    })
                }
            </div>
        </div>
    );
}

export default TabList;
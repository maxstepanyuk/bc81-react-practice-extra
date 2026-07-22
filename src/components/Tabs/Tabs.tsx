import type { Tab } from "../../types";

interface TabsProps {
  tabs: Tab[];
}

export default function Tabs({ tabs }: TabsProps) {
  return (
    <>
      {tabs.map((tab) => {
        return (
          <button key={tab.textContent} onClick={tab.clickHandler}>
            {tab.textContent}
          </button>
        );
      })}
    </>
  );
}

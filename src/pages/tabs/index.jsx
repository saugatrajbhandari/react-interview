/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/display-name */
import React, { createContext, useContext, useState } from "react";
import "./tab.css";

function TabsPage() {
  const [currentTabIndex, setCurrentTabIndex] = useState(0);

  const onChange = (index) => {
    setCurrentTabIndex(index);
  };

  return (
    <>
      <div>
        <Tabs currentTab={currentTabIndex} onChange={onChange}>
          <Tabs.HeadContainer>
            <Tabs.Item index={0} label={"item 1"} />
            <Tabs.Item index={1} label={"item 2"} />
            <Tabs.Item index={2} label={"item 3"} />
          </Tabs.HeadContainer>

          <Tabs.ContentContainer>
            <Tabs.ContentItem index={0}>
              <h1>content one</h1>
            </Tabs.ContentItem>

            <Tabs.ContentItem index={1}>
              <h1>content two</h1>
            </Tabs.ContentItem>

            <Tabs.ContentItem index={2}>
              <h1>content three</h1>
            </Tabs.ContentItem>
          </Tabs.ContentContainer>
        </Tabs>
      </div>

      <h2 className="container mx-auto mt-5">
        The Compound Component Pattern in React is a design pattern that allows
        you to create flexible and reusable components by enabling a parent
        component to manage and control the behavior of its child components.
        This pattern is particularly useful when you need to create complex
        components like form controls, modals, or tabs, where each part of the
        component is a separate entity, but they need to share state or
        behavior.
      </h2>
    </>
  );
}

export default TabsPage;

const TabContext = createContext();
function Tabs({ children, currentTab, onChange }) {
  return (
    <div className="tab">
      <TabContext.Provider value={{ currentTab, onChange }}>
        {children}
      </TabContext.Provider>
    </div>
  );
}

Tabs.HeadContainer = ({ children }) => {
  return <div className="head-container">{children}</div>;
};

Tabs.Item = ({ label, index }) => {
  const { currentTab, onChange } = useContext(TabContext);

  return (
    <div
      onClick={() => onChange(index)}
      className={`item ${currentTab === index ? "active" : null}`}
    >
      {label}
    </div>
  );
};

Tabs.ContentContainer = ({ children }) => {
  return <div className="content-container">{children}</div>;
};

Tabs.ContentItem = ({ children, index }) => {
  const { currentTab } = useContext(TabContext);

  if (currentTab === index) {
    return <div>{children}</div>;
  } else {
    return null;
  }
};

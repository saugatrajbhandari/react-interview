/* eslint-disable react/display-name */
import React, { createContext } from "react";

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

export default Tabs;

Tabs.HeadContainer = ({ children }) => {
  return <div>{children}</div>;
};

Tabs.Item = ({ label, index }) => {
  return <div>{label}</div>;
};

Tabs.ContentContainer = ({ children }) => {
  return <div>{children}</div>;
};

Tabs.ContentItem = ({ children, index }) => {
  return <div>{children}</div>;
};

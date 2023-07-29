import React, { useState } from "react";
import './style.scss'
const SwitchTabs = ({ onTabChange, data }) => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [left, setLeft] = useState(0);

  const activeTab = (tab, index) => {
    setLeft(index * 100);
    setTimeout(() => {
      setSelectedTab(index);
    }, 300);
    onTabChange(tab, index);
  };
  return (
    <div className="P-switching-tabs">
      <div className="P-tab-items G-flex G-align-center">
        {data &&  data.map((tab, index) => {
          
         return  <span
            onClick={() => activeTab(tab, index)}
            key={index}
            className={`P-tab-item ${selectedTab === index ? 'P-tab-active' : ''}`}
          >
            {tab}
          </span>;
        })}
        <span className="P-moving-by" style={{ left }} />
      </div>
    </div>
  );
};

export default SwitchTabs;

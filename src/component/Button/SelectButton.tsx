import React from "react";

const SelectButton = ({
  tab,
  activeTab,
  setActiveTab,
}: {
  tab: string;
  activeTab: string;
  setActiveTab: any;
}) => {
  console.log(activeTab);
  return (
    <div>
      <button
        className={`md:px-4 px-2 py-2  border-b-2 uppercase ${
          activeTab === `${tab}`
            ? "text-yellow-500 border-yellow-500"
            : "border-transparent hover:text-yellow-500 hover:border-yellow-500"
        }`}
        onClick={() => setActiveTab(tab)}
      >
        {tab}
      </button>
    </div>
  );
};

export default SelectButton;

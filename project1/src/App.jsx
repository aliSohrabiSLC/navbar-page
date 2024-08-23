import React, { useState } from 'react';
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex);
  };

  return (
    <div className="backgraound">
    <div className="app-container">
      <div className="tabs">
        <div
          className={`tab ${activeTab === 1 ? 'active' : ''}`}
          onClick={() => handleTabClick(1)}
        >
          Tab 1
        </div>
        <div
          className={`tab ${activeTab === 2 ? 'active' : ''}`}
          onClick={() => handleTabClick(2)}
        >
          Tab 2
        </div>
        <div
          className={`tab ${activeTab === 3 ? 'active' : ''}`}
          onClick={() => handleTabClick(3)}
        >
          Tab 3
        </div>
        <div
          className={`tab ${activeTab === 4 ? 'active' : ''}`}
          onClick={() => handleTabClick(4)}
        >
          Tab 4
        </div>
      </div>
      <div className="tab-content">
        {activeTab === 1 && <div><h1>Tab1</h1><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, quibusdam?</p></div>}
        {activeTab === 2 && <div><h1>Tab2</h1><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, veritatis quod corrupti voluptatibus tempora deserunt esse illum? Perspiciatis, veritatis totam.</p></div>}
        {activeTab === 3 && <div><h1>Tab3</h1><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur recusandae, corrupti non nostrum reiciendis repudiandae quia molestias ullam est accusantium consectetur itaque ipsum, incidunt error? Dignissimos magni quas assumenda cupiditate?</p></div>}
        {activeTab === 4 && <div><h1>Tab4</h1><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum impedit enim ab iste reprehenderit, doloremque officiis voluptates praesentium quaerat magnam, blanditiis deserunt, necessitatibus corrupti vero porro aliquam nemo? Consequatur asperiores blanditiis fugiat accusamus nulla ad vero cupiditate amet facilis alias.</p></div>}
      </div>
    </div>
    </div>
  );
}

export default App;

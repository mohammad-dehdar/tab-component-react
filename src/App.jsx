import { useState, useEffect } from "react";
import NavigationBar from "./navbar";
import Cards from "./cards";

function App() {
  const content = [
    { id: 1, title: "Lorem 1", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, consequuntur? Omnis, quibusdam. Odit doloremque rem, aperiam quam pariatur iure hic." },
    { id: 2, title: "Lorem 2", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, consequuntur? Iure hic." },
    { id: 3, title: "Lorem 3", text: "Adipisicing elit. Officia, consequuntur? Omnis, quibusdam. Odit doloremque rem, aperiam quam pariatur iure hic." }
  ];

  const [selectedTab, setSelectedTab] = useState(0); 
  useEffect(() => {
   
    const savedTab = localStorage.getItem("selectedTab");
    if (savedTab !== null) {
      setSelectedTab(Number(savedTab));
    }
  }, []);

  const handleTabSelect = (index) => {
    setSelectedTab(index);
    localStorage.setItem("selectedTab", index);  
  };

  return (
    <>
      <div className="max-w-7xl m-auto">
        <header className="bg-slate-100 shadow-md border-b border-gray-400 py-4 pl-4 mt-20 rounded-3xl">
          <h1 className="text-2xl font-bold text-left text-gray-600">Tabs Component</h1>
        </header>
        <NavigationBar onTabSelect={handleTabSelect} />
        <Cards title={content[selectedTab].title} text={content[selectedTab].text} />
      </div>
    </>
  );
}

export default App;

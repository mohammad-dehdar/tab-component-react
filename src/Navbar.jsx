import { useState, useEffect } from "react";
import Home from "./Home";
import AboutUs from "./AboutUs";
import ContactUs from "./ContactUs";

function Navbar() {
    const [activeTab, setActiveTab] = useState(() => {
        // Retrieve the saved tab from local storage or default to "Home"
        return localStorage.getItem("activeTab") || "Home";
    });

    useEffect(() => {
        // Save the active tab to local storage whenever it changes
        localStorage.setItem("activeTab", activeTab);
    }, [activeTab]);

    const renderComponent = () => {
        switch (activeTab) {
            case "Home":
                return <Home />;
            case "AboutUs":
                return <AboutUs />;
            case "ContactUs":
                return <ContactUs />;
            default:
                return <Home />;
        }
    };

    const getTabClass = (tabName) => {
        return activeTab === tabName
            ? "bg-white text-blue-500 font-bold border-b-4 border-blue-500"
            : "hover:bg-white text-gray-700";
    };

    return (
        <div className="w-full bg-slate-100 px-4 py-2 rounded-t-md rounded-b-2xl">
            <ul className="w-full flex justify-between font-medium text-lg transition-all px-2 py-1 rounded-2xl">
                <li className={`${getTabClass("Home")} px-2 py-1 rounded-2xl`} onClick={() => setActiveTab("Home")}>
                    <button aria-label="Home Tab">Home</button>
                </li>
                <li className={`${getTabClass("AboutUs")} px-2 py-1 rounded-2xl`} onClick={() => setActiveTab("AboutUs")}>
                    <button aria-label="About Us Tab">About Us</button>
                </li>
                <li className={`${getTabClass("ContactUs")} px-2 py-1 rounded-2xl`} onClick={() => setActiveTab("ContactUs")}>
                    <button aria-label="Contact Us Tab">Contact Us</button>
                </li>
            </ul>
            <div className="mt-4">
                {renderComponent()}
            </div>
        </div>
    );
}

export default Navbar;

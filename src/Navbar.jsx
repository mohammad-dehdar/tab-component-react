import { useState } from "react";
import Home from "./Home";
import AboutUs from "./AboutUs";
import ContactUs from "./ContactUs";

function Navbar() {
    const [activeTab, setActiveTab] = useState("Home");

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
            ? "bg-white text-blue-500 font-bold"
            : "hover:bg-white text-gray-700";
    };

    return (
        <div className="w-full bg-slate-100 px-4 py-2 rounded-t-md rounded-b-2xl">
            <ul className="w-full flex justify-between *:font-medium *:text-lg *:transition-all *:px-2 *:py-1 *:rounded-2xl">
                <li className={`${getTabClass("Home")} px-2 py-1 rounded-2xl`} onClick={() => setActiveTab("Home")}>
                    <a href="#">Home</a>
                </li>
                <li className={`${getTabClass("AboutUs")} px-2 py-1 rounded-2xl`} onClick={() => setActiveTab("AboutUs")}>
                    <a href="#">About Us</a>
                </li>
                <li className={`${getTabClass("ContactUs")} px-2 py-1 rounded-2xl`} onClick={() => setActiveTab("ContactUs")}>
                    <a href="#">Contact Us</a>
                </li>
            </ul>
            <div className="mt-4">
                {renderComponent()}
            </div>
        </div>
    );
}

export default Tabs;

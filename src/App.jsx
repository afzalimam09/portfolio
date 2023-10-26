import React, { useState } from "react";
import Sidebar from "./components/shared/Sidebar";
import Navbar from "./components/shared/Navbar";
import About from "./components/About";
import Resume from "./components/Resume";
import Portfolio from "./components/Protfolio";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import "./App.css";

const tabs = {
    About: About,
    Resume: Resume,
    Portfolio: Portfolio,
    Blog: Blog,
    Contact: Contact,
};

const App = () => {
    const [component, setComponent] = useState("About");
    const ActiveComponent = tabs[component];

    return (
        <main>
            <Sidebar />
            <div className="main-content">
                <Navbar setComponent={setComponent} component={component} />

                <ActiveComponent />
            </div>
        </main>
    );
};

export default App;

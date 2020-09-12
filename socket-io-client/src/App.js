import React, { useState } from "react";
import MessengerPage from "./layouts/MessengerPage";
import HomePage from "./layouts/HomePage";
import QRCode from "./components/QRCode";

function App() {
    const [loadClient, setLoadClient] = useState(true);
    return (
        <>
            <MessengerPage/>
        </>
    );
}

export default App;

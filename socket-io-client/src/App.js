import React, { useState } from "react";
import MessengerPage from "./layouts/MessengerPage";
import HomePage from "./layouts/HomePage";
import QRCode from "./QRCode";

function App() {
    const [loadClient, setLoadClient] = useState(true);
    return (
        <>
            <MessengerPage/>
            <QRCode></QRCode>
        </>
    );
}

export default App;

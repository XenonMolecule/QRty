import React, { useState } from "react";
import MessengerPage from "./layouts/MessengerPage";
import HomePage from "./layouts/HomePage";

function App() {
    const [loadClient, setLoadClient] = useState(true);
    return (
        <>
            <MessengerPage/>
        </>
    );
}

export default App;

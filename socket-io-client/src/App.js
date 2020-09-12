import React, { useState } from "react";
import MessengerPage from "./layouts/MessengerPage";

function App() {
    const [loadClient, setLoadClient] = useState(true);
    return (
        <>
            <MessengerPage/>
        </>
    );
}

export default App;

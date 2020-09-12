import React, { useState } from "react";
import MessengerPage from "./layouts/MessengerPage";
import HomePage from "./layouts/HomePage";
import QRCode from "./components/QRCode";
import JoinRoomPage from "./layouts/JoinRoomPage";

function App() {
    const [loadClient, setLoadClient] = useState(true);
    return (
        <>
            {window.location.pathname == "/" ? <HomePage/> : <MessengerPage/>}
        </>
    );
}

export default App;

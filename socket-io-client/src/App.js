import React, { useState } from "react";
import MessengerPage from "./layouts/MessengerPage";
import HomePage from "./layouts/HomePage";
import JoinRoomPage from "./layouts/JoinRoomPage";

function App() {
    const [loadClient, setLoadClient] = useState(true);
    let page = <MessengerPage/>
    switch(window.location.pathname) {
        case "/" :
            page = <HomePage/>
            break;
        case "/joinroom":
            page = <JoinRoomPage/>
            break;
    }
    return (
        <>
            {page}
            <link href="https://fonts.googleapis.com/css?family=Oswald" rel="stylesheet"/>
        </>
    );
}

export default App;

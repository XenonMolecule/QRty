import React, { useState } from "react";
import MessengerPage from "./layouts/MessengerPage";
import HomePage from "./layouts/HomePage";
import JoinRoomPage from "./layouts/JoinRoomPage";
import InstructionPage from "./layouts/InstructionPage";
import QRtyNav from "./components/QRtyNav";

function App() {
    const [loadClient, setLoadClient] = useState(true);
    let page = <MessengerPage/>;
    let room = "";
    switch(window.location.pathname) {
        case "/" :
            page = <HomePage/>;
            break;
        case "/joinroom":
            page = <JoinRoomPage/>;
            break;
        case "/infopage":
            page = <InstructionPage/>
            break;
        default:
            if (window.location.pathname.startsWith("/room/")) {
                room = window.location.pathname.slice(6);
            } else {
                room = window.location.pathname;
            }
    }
    return (
        <>
            <QRtyNav room={room}/>
            {page}
            <link href="https://fonts.googleapis.com/css?family=Oswald" rel="stylesheet"/>
        </>
    );
}

export default App;

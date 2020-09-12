import React, { useState } from "react";
import ClientComponent from "./ClientComponent";
import QRCode from "./QRCode";

function App() {
    const [loadClient, setLoadClient] = useState(true);
    return (
        <>
            {/* LOAD OR UNLOAD THE CLIENT */}
            <button onClick={() => setLoadClient(prevState => !prevState)}>
                TOGGLE CLIENT
            </button>
            {/* SOCKET IO CLIENT*/}
            {loadClient ? <ClientComponent /> : null}
            <QRCode></QRCode>
        </>
    );
}

export default App;

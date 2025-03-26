import React, { createContext, useMemo } from "react";
import { io } from "socket.io-client";

export const SocketContext = createContext(null);

export const SocketProvider = (props) => {
    const socket = useMemo(
        () => io(import.meta.VITE_SIGNALING_SERVER_URL),
        []
    );

    return (
        <SocketContext.Provider value={socket}>
            {props.children}
        </SocketContext.Provider>
    );
};

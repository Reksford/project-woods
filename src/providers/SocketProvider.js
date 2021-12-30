import React, {useContext, useEffect, useState} from 'react';
import io from 'socket.io-client';

const SocketContext = React.createContext();

//custom hook to use context
export function useSocket() {
  return useContext(SocketContext);
}

export function SocketProvider ({children}) {
  const [socket, setSocket] = useState(null);
  const [hasSocket, setHasSocket] = useState(false);

  useEffect(() => {
    if (!hasSocket) return
    const newSocket = io(process.env.REACT_APP_HEROKU_APP);
    // const newSocket = io('localhost:5000');
    setSocket(newSocket);

    return () => newSocket.close()

  }, [hasSocket])

  return (
    <SocketContext.Provider value={{socket, hasSocket, setHasSocket}}>
      {children}
    </SocketContext.Provider>
  )
}

import React, { useContext, useState, useEffect, useCallback } from 'react';
import { useSocket } from './SocketProvider';

const FeedContext = React.createContext();

export function useFeed() {
  return useContext(FeedContext);
}

export function FeedProvider({children}) {
  const {socket} = useSocket();
  const [textFeed, setTextFeed] = useState([]);
  const [nickname, setNickname] = useState(null);

 //this sends a message to the server of type 'new fish'
  const emitFish = (fish) => {
    if (socket == null || nickname == null) {
      addFishToFeed('You', fish);
      console.log(fish);
    } else {
      socket.emit('new fish', nickname, fish);
    }
  }

  //this is to display the fish coming from the server
  const addFishToFeed = useCallback((name, fish) => {
    const message = `${name} caught a ${fish.size}cm ${fish.name}`
    setTextFeed((prev) => [...prev, message])
  }, [])

  //this is the listener to the server
  useEffect(() => {
    if (socket == null) return

    socket.on('fish caught', addFishToFeed);

    return () => socket.off('fish caught')
  }, [socket, addFishToFeed])

  const value = {
    sendFish: emitFish,
    textFeed,
    nickname,
    setNickname
  }

  return (
    <FeedContext.Provider value={value}>
      {children}
    </FeedContext.Provider>
  )
}

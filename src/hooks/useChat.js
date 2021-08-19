import { useState, useEffect, useRef } from 'react';
import io from 'socket.io-client';

const useChat = (onLoggedOut) => {
  const socketRef = useRef(null);
  const [userRestrictions, setUserRestrictions] = useState({});
  const [onlineUsers, setOnlineUsers] = useState([]);
  const [allUsers, setAllUsers] = useState([]);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    socketRef.current = io('localhost:5000', {
      reconnectionDelayMax: 10000,
      auth: {
        token: localStorage.getItem('token'),
      },
      transports: ['websocket'],
    });

    socketRef.current.on('disconnect', () => {
      onLoggedOut();
    });

    socketRef.current.on('c:userRestrictions', (restrictions) => {
      setUserRestrictions(restrictions);
    });

    socketRef.current.on('c:allUsers', (users) => {
      setAllUsers(users);
    });

    socketRef.current.on('c:onlineUsers', (users) => {
      setOnlineUsers(users);
    });

    socketRef.current.on('c:message', (message) => {
      setMessages((currentMessages) => [...currentMessages, message]);
    });

    return () => socketRef.current.disconnect();
  }, [onLoggedOut]);

  return [socketRef, userRestrictions, onlineUsers, allUsers, messages];
};

export default useChat;

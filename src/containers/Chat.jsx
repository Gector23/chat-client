import { useState, useEffect, useRef } from "react";
import io from "socket.io-client";
import { Grid } from "@material-ui/core";

import UserPanel from "../components/UserPanel";
import ChatBoard from "../components/ChatBoard";

const Chat = ({ onLoggedOut }) => {
  const socketRef = useRef(null);
  const [userRestrictions, setUserRestrictions] = useState({});
  const [onlineUsers, setOnlineUsers] = useState([]);
  const [allUsers, setAllUsers] = useState([]);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    socketRef.current = io("localhost:5000", {
      reconnectionDelayMax: 10000,
      auth: {
        token: localStorage.getItem("token")
      },
      transports: ["websocket"]
    });

    socketRef.current.on("disconnect", () => {
      onLoggedOut();
    });

    socketRef.current.on("c:userRestrictions", userRestrictions => {
      setUserRestrictions(userRestrictions);
    });

    socketRef.current.on("c:allUsers", allUsers => {
      setAllUsers(allUsers);
    });

    socketRef.current.on("c:onlineUsers", onlineUsers => {
      setOnlineUsers(onlineUsers);
    });

    socketRef.current.on("c:message", message => {
      setMessages(messages => [
        ...messages,
        message
      ]);
    });

    return () => socketRef.current.disconnect();
  }, [onLoggedOut]);

  const handleMessage = text => {
    socketRef.current.emit("s:message", text);
  };

  const handleToggleMute = (userId, isMuted) => {
    if (isMuted) {
      socketRef.current.emit("s:unmuteUser", userId);
    } else {
      socketRef.current.emit("s:muteUser", userId);
    }
  };

  const handleToggleBlock = (userId, isBlocked) => {
    if (isBlocked) {
      socketRef.current.emit("s:unblockUser", userId);
    } else {
      socketRef.current.emit("s:blockUser", userId);
    }
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6} md={4}>
        <UserPanel
          isAdmin={userRestrictions.isAdmin}
          onlineUsers={onlineUsers}
          allUsers={allUsers}
          onToggleMute={handleToggleMute}
          onToggleBlock={handleToggleBlock}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={8}>
        <ChatBoard messages={messages} inputDisabled={userRestrictions.isMuted} onMessage={handleMessage} />
      </Grid>
    </Grid>
  );
};

export default Chat;